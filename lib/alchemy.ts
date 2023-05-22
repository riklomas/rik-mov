import { Alchemy, Network, type Nft } from 'alchemy-sdk'

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!

export const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_KEY,
  network: process.env.ALCHEMY_CHAIN! as Network
})

export const mainnetAlchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ETH_MAINNET
})

export { CONTRACT_ADDRESS, type Nft }
