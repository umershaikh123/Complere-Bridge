import { ChainId } from './networks'
import { getAPIBaseUrl } from '.'

export function hasL1Subgraph(l2ChainId: number) {
  switch (l2ChainId) {
    case ChainId.ArbitrumOne:
    case ChainId.ArbitrumNova:
    case ChainId.ArbitrumSepolia:
    case ChainId.Holesky:
      case ChainId.baseSepolia:  
      case ChainId.Complare:  
      return true

    default:
      return false
  }
}

export function hasL2Subgraph(l2ChainId: number) {
  switch (l2ChainId) {
    case ChainId.ArbitrumOne:
    case ChainId.ArbitrumSepolia:
    case ChainId.NexusOrbit:
      case ChainId.Complare:  
      return true

    default:
      return false
  }
}

export const fetchLatestSubgraphBlockNumber = async (
  chainId: number
): Promise<number> => {
  const response = await fetch(
    `${getAPIBaseUrl()}/api/chains/${chainId}/block-number`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
  )

  return ((await response.json()) as { data: number }).data
}

export const shouldIncludeSentTxs = ({
  type,
  isSmartContractWallet,
  isConnectedToParentChain
}: {
  type: 'deposits' | 'withdrawals'
  isSmartContractWallet: boolean
  isConnectedToParentChain: boolean
}) => {
  if (isSmartContractWallet) {
    // show txs sent from this account for:
    // 1. deposits if we are connected to the parent chain, or
    // 2. withdrawals if we are connected to the child chain
    return isConnectedToParentChain
      ? type === 'deposits'
      : type === 'withdrawals'
  }
  // always show for EOA
  return true
}

export const shouldIncludeReceivedTxs = ({
  type,
  isSmartContractWallet,
  isConnectedToParentChain
}: {
  type: 'deposits' | 'withdrawals'
  isSmartContractWallet: boolean
  isConnectedToParentChain: boolean
}) => {
  if (isSmartContractWallet) {
    // show txs sent to this account for:
    // 1. withdrawals if we are connected to the parent chain, or
    // 2. deposits if we are connected to the child chain
    return isConnectedToParentChain
      ? type === 'withdrawals'
      : type === 'deposits'
  }
  // always show for EOA
  return true
}
