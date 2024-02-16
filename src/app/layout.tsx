import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Cosmos Journeyer',
  description: 'Journey through the cosmos on a web page. Cosmos Journeyer is a free, open-source project that lets you explore the universe in your browser',
  applicationName: 'Cosmos Journeyer',
  robots: 'index,follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
