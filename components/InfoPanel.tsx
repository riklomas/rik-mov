import { alchemy, CONTRACT_ADDRESS, type Nft } from '@/lib/alchemy'

export const InfoPanel = async ({ item }: { item: Nft }) => {
  let owner = null
  let shortOwner = null
  let href = null
  let ens = null
  let mediaType = null
  let res = [0, 0]

  const { owners } = await alchemy.nft.getOwnersForNft(
    CONTRACT_ADDRESS,
    item.tokenId
  )

  if (owners.length > 0) {
    owner = owners[0]
    shortOwner =
      owner.substring(0, 6) + '...' + owner.substring(owner.length - 4)
    ens = await alchemy.core.lookupAddress(owners[0])
    href = `https://rainbow.me/${owner}`
  }

  if (item.rawMetadata?.animation) {
    mediaType = 'video'
    res = [
      item.rawMetadata.animation_details.width,
      item.rawMetadata.animation_details.height
    ]
  } else if (item.rawMetadata?.image) {
    mediaType = 'image'
    res = [
      item.rawMetadata.image_details.width,
      item.rawMetadata.image_details.height
    ]
  }

  return (
    <>
      <h2>{item.title}</h2>

      <div>
        <p>
          {res[0]}&times;{res[1]}px {mediaType}
        </p>
        <p>
          Owner:{' '}
          {href ? (
            <a href={href}>{ens ?? shortOwner}</a>
          ) : (
            ens ?? shortOwner ?? 'no one'
          )}
        </p>
      </div>
    </>
  )
}
