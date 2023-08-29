import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
