import styles from './page.module.css'
import { DisplayImage } from '../components/DisplayImage'
import { DisplayVideo } from '../components/DisplayVideo'
import { InfoPanel } from '../components/InfoPanel'

import { alchemy, CONTRACT_ADDRESS, type Nft } from '@/lib/alchemy'

const Display = async ({ item }: { item: Nft }) => {
  let d = <></>

  if (item.rawMetadata?.animation) {
    d = <DisplayVideo item={item} />
  } else if (item.rawMetadata?.image) {
    d = <DisplayImage item={item} />
  }

  return (
    <figure className={styles.card}>
      <div>{d}</div>

      <figcaption>
        {/* @ts-expect-error Server Component */}
        <InfoPanel item={item} />
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

export const revalidate = 60 * 5
