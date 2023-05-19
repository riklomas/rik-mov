import './globals.css'
import type { Metadata } from 'next'
import LocalFont from 'next/font/local'

const mono = LocalFont({
  src: [
    {
      path: './fonts/iAWriterMonoV.ttf',
      style: 'normal'
    },
    {
      path: './fonts/iAWriterMonoV-Italic.ttf',
      style: 'italic'
    }
  ]
})

export const metadata: Metadata = {
  title: 'rik.mov',
  description:
    'An on-chain gallery, featuring generative art based around just one texture',
  authors: { name: 'Rik Lomas', url: 'https://rik.mov' },
  themeColor: '#222222',
  openGraph: {
    title: 'rik.mov',
    description:
      'An on-chain gallery, featuring generative art based around just one texture',
    url: 'https://rik.mov',
    siteName: 'rik.mov',
    images: [
      {
        url: './og.jpg',
        width: 1920,
        height: 1080,
        alt: 'rik.mov'
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rik.mov',
    description:
      'An on-chain gallery, featuring generative art based around just one texture',
    creator: '@riklomas',
    images: ['./og.jpg']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <header>
          <h1>rik.mov</h1>
          <p>
            An onchain gallery, featuring generative art based around a single
            texture.
          </p>
        </header>

        {children}
      </body>
    </html>
  )
}
