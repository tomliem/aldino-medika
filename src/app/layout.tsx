import './globals.css'
import 'react-toastify/dist/ReactToastify.min.css';
import type { Metadata } from 'next'
import Footer from '@/components/base/Layout/Footer'
import Header from '@/components/base/Layout/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aldino Medika',
  description: 'One Stop Occupational Health-Safety & Enviromental Services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const agent = (children as any)?.props?.childProp?.segment
  return (
    <html lang="en">
      <head>
        <title>Aldino Medika</title>
        <meta name="description" content="One Stop Occupational Health-Safety & Enviromental Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-blue-site bg-white">
        <main className="bg-white">{children}</main>
      </body>
    </html>
  )
}
