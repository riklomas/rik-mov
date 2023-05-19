import './globals.css'
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

export const metadata = {
  title: 'rik.mov',
  description:
    'An on-chain gallery, featuring generative art based around just one texture'
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
