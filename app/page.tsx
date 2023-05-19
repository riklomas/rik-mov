import Image from 'next/image'
import styles from './page.module.css'

import { Alchemy, Network, type Nft } from 'alchemy-sdk'

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_KEY,
  network: process.env.ALCHEMY_CHAIN! as Network
})

const Display = async ({ item }: { item: Nft }) => {
  let d = <></>
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
    d = (
      <video
        src={item.rawMetadata.animation}
        autoPlay
        muted
        loop
        playsInline
      ></video>
    )
    mediaType = 'video'
    res = [
      item.rawMetadata.animation_details.width,
      item.rawMetadata.animation_details.height
    ]
  } else if (item.rawMetadata?.image) {
    d = <img src={item.rawMetadata.image} />
    mediaType = 'image'
    res = [
      item.rawMetadata.image_details.width,
      item.rawMetadata.image_details.height
    ]
  }

  return (
    <figure className={styles.card}>
      <div className="media">{d}</div>

      <figcaption>
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
      </figcaption>
    </figure>
  )
}

export default async function Home() {
  const { nfts } = await alchemy.nft.getNftsForContract(CONTRACT_ADDRESS)

  const oNfts = nfts.sort((a, b) =>
    b.timeLastUpdated.localeCompare(a.timeLastUpdated)
  )

  return (
    <main className={styles.main}>
      {oNfts.map((o) => {
        /* @ts-expect-error Server Component */
        return <Display key={o.tokenId} item={o} />
      })}
    </main>
  )
}
