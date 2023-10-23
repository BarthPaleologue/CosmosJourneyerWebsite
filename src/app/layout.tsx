import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'CosmosJourneyer',
  description: 'Journey through a familiar and yet alien cosmos.',
  applicationName: 'CosmosJourneyer',
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
