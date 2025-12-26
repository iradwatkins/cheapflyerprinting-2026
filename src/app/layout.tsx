import type { Metadata } from 'next'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

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
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
