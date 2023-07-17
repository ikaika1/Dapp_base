import type { Chain } from "viem/chains";

export const taiko = {
  id: 167005,
  name: "Taiko",
  network: "alpha-3",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.test.taiko.xyz"],
    },
    default: {
      http: ["https://rpc.test.taiko.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.test.taiko.xyz",
    },
  },
  testnet: true,
} as const satisfies Chain;



export const scroll = {
  id: 534353,
  name: "Scroll",
  network: "Scroll Testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://alpha-rpc.scroll.io/l2"],
    },
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
    },
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://blockscout.scroll.io/",
    },
  },
  testnet: true,
} as const satisfies Chain;



export const base = {
  id: 8453,
  name: "Base",
  network: "Base mainnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://developer-access-mainnet.base.org"],
    },
    default: {
      http: ["https://developer-access-mainnet.base.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://basescan.org",
    },
  },
  testnet: true,
} as const satisfies Chain;


export const zkSync_Era_Testnet = {
  id: 280,
  name: "zkSync_Era_Testnet",
  network: "zkSync_Era_Testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://testnet.era.zksync.dev"],
    },
    default: {
      http: ["https://testnet.era.zksync.dev"],
    },
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://goerli.explorer.zksync.io",
    },
  },
  testnet: true,
} as const satisfies Chain;



