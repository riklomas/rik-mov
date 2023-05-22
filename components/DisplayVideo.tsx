import { type Nft } from 'alchemy-sdk'

export const DisplayVideo = ({ item }: { item: Nft }) => {
  return (
    <video
      src={item.rawMetadata!.animation}
      autoPlay
      muted
      loop
      playsInline
    ></video>
  )
}
