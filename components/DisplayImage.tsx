import { type Nft } from 'alchemy-sdk'
import Image from 'next/image'

export const DisplayImage = ({ item }: { item: Nft }) => {
  return (
    <Image
      src={item.rawMetadata!.image as string}
      alt={item.title}
      fill={true}
    />
  )
}
