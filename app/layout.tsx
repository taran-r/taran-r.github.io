import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import Nav from './components/Nav'

const spaceGrotesk = Space_Grotesk({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Taran Raj | Personal Website',
  description: 'Personal portfolio showcasing projects, experience, and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
