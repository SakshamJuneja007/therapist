import './globals.css'
import { Metadata } from 'next'
import { Playfair_Display, Open_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Dr. Serena Blake',
  description: 'Therapist Website for healing, insight, and well-being',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${openSans.variable} font-sans antialiased `}
      >
        {children}
      </body>
    </html>
  )
}
