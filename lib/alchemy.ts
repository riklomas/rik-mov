import { Alchemy, Network, type Nft } from 'alchemy-sdk'

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!

export const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_KEY,
  network: process.env.ALCHEMY_CHAIN! as Network
})

export { CONTRACT_ADDRESS, type Nft }
