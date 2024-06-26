import { Chain } from 'wagmi'

export var holeskyChain: Chain = {
  id: 17000,
  network: 'holesky',
  name: 'holesky',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://ethereum-holesky-rpc.publicnode.com']
    },
    public: {
      http: ['https://ethereum-holesky-rpc.publicnode.com']
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://holesky.etherscan.io/'
    },
    default: {
      name: 'Etherscan',
      url: 'https://holesky.etherscan.io/'
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 1448852
    }
  },
  testnet: true
}

export var baseSepoliaChain: Chain = {
  id: 84532,
  network: 'Base Sepolia',
  name: 'Base Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [`${process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL}`]
    },
    public: {
      http: [`${process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL}`]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'BlockScout',
      url: `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_EXPLORER}`
    },
    default: {
      name: 'BlockScout',
      url: `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_EXPLORER}`
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 1059647
    }
  },
  testnet: true
}

export var complareChain: Chain = {
  id: 5918836757,
  network: 'complare-chain',
  name: 'complare-chain',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [`${process.env.NEXT_PUBLIC_L3_RPC}`]
    },
    public: {
      http: [`${process.env.NEXT_PUBLIC_L3_RPC}`]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'BlockScout',
      url: `${process.env.NEXT_PUBLIC_L3_EXPLORER}`
    },
    default: {
      name: 'BlockScout',
      url: `${process.env.NEXT_PUBLIC_L3_EXPLORER}`
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 5
    }
  },
  testnet: true
}

export var nexusOrbitChain: Chain = {
  id: 13331370,
  network: 'nexus-orbit-chain',
  name: 'Nexus Orbit Chain',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [`${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`]
    },
    public: {
      http: [`${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`]
    }
  },
  blockExplorers: {
    blockscout: {
      name: 'blockscout',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    },
    default: {
      name: 'blockscout',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    }
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 15
    }
  },
  testnet: true
}
