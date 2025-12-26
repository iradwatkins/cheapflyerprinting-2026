import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cheap Flyer Printing - Budget-Friendly Flyer Services',
  description: 'Affordable flyer printing for businesses, events, and promotions. Fast turnaround, low prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
