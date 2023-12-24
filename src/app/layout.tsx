import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/base/Layout/Footer'
import Header from '@/components/base/Layout/Header'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aldino FnT',
  description: 'Freight Forwarder',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const agent = (children as any)?.props?.childProp?.segment
  return (
    <html lang="en">
      <head>
        <title>Aldino FnT</title>
        <meta name="description" content="Freight Forwarder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-blue-site bg-white">
        <Header />
        <main className="bg-white min-h-[600px]">{children}</main>

        <div className="py-5 px-2 sm:px-8 border bg-primary-blue mt-8"></div>
      </body>
    </html>
  )
}
