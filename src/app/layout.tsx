import './globals.css'
import 'react-toastify/dist/ReactToastify.min.css';
import type { Metadata } from 'next'
import Footer from '@/components/base/Layout/Footer'
import Header from '@/components/base/Layout/Header'
import { ToastContainer } from 'react-toastify';
import { Inter } from 'next/font/google'

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
        <Footer />

        <ToastContainer closeButton={false} pauseOnHover={false} autoClose={3000} position="top-center" />
      </body>
    </html>
  )
}
