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
  name: "Scloll",
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