import './globals.css'
import './styles.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProviderWrapper from '@/components/ProviderWrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
