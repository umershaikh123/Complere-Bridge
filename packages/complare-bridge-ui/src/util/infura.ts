import { providers } from 'ethers'
import { Chain, ChainProviderFn } from 'wagmi'

import { ChainId } from './networks'

// custom implementation based on https://github.com/wevm/wagmi/blob/wagmi%400.12.13/packages/core/src/providers/infura.ts
// with multiple infura keys support
export function customInfuraProvider<TChain extends Chain>(): ChainProviderFn<
  TChain,
  providers.InfuraProvider,
  providers.InfuraWebSocketProvider
> {
  return function (chain) {
    // Retrieve the API key for the current chain's network
    const infuraKey = chainIdToInfuraKey(chain.id)

    if (!infuraKey) return null
    if (!chain.rpcUrls.infura?.http[0]) return null

    return {
      chain: {
        ...chain,
        rpcUrls: {
          ...chain.rpcUrls,
          default: {
            http: [`${chain.rpcUrls.infura.http[0]}/${infuraKey}`]
          }
        }
      } as TChain,
      provider: () => {
        const provider = new providers.InfuraProvider(
          {
            chainId: chain.id,
            name: chain.network,
            ensAddress: chain.contracts?.ensRegistry?.address
          },
          infuraKey
        )
        return Object.assign(provider)
      },
      webSocketProvider: () =>
        new providers.InfuraWebSocketProvider(
          {
            chainId: chain.id,
            name: chain.network,
            ensAddress: chain.contracts?.ensRegistry?.address
          },
          infuraKey
        )
    }
  }
}

export function chainIdToInfuraKey(chainId: ChainId) {
  const defaultInfuraKey = process.env.NEXT_PUBLIC_INFURA_KEY

  switch (chainId) {
    case ChainId.Ethereum:
      return process.env.NEXT_PUBLIC_INFURA_KEY_ETHEREUM || defaultInfuraKey
    case ChainId.Sepolia:
      return process.env.NEXT_PUBLIC_INFURA_KEY_SEPOLIA || defaultInfuraKey
    case ChainId.ArbitrumOne:
      return process.env.NEXT_PUBLIC_INFURA_KEY_ARBITRUM_ONE || defaultInfuraKey

    case ChainId.ArbitrumSepolia:
      return (
        process.env.NEXT_PUBLIC_INFURA_KEY_ARBITRUM_SEPOLIA || defaultInfuraKey
      )
    case ChainId.NexusOrbit:
      return `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`

    case ChainId.baseSepolia:
      return `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL || 'null rpc'}`
    case ChainId.Complare:
      return `${process.env.NEXT_PUBLIC_L3_RPC || 'null rpc'}`
    case ChainId.Holesky:
      return `https://ethereum-holesky-rpc.publicnode.com`
    default:
      return defaultInfuraKey
  }
}

export function chainIdToInfuraUrl(chainId: ChainId) {
  const infuraKey = chainIdToInfuraKey(chainId)

  switch (chainId) {
    case ChainId.Ethereum:
      return `https://mainnet.infura.io/v3/`
    case ChainId.Sepolia:
      return `https://sepolia.infura.io/v3/`
    case ChainId.ArbitrumOne:
      return `https://arbitrum-mainnet.infura.io/v3/`
    case ChainId.ArbitrumSepolia:
      return `https://arbitrum-sepolia.infura.io/v3/`

    case ChainId.NexusOrbit:
      return `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`
    case ChainId.Complare:
      return `${process.env.NEXT_PUBLIC_L3_RPC || 'null rpc'}`
    case ChainId.baseSepolia:
      return `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL || 'null rpc'}`

    case ChainId.Holesky:
      return `https://ethereum-holesky-rpc.publicnode.com`

    default:
      return undefined
  }
}
