import './globals.css'
import 'react-toastify/dist/ReactToastify.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material';
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles'

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
        
        <link href="@iconscout/unicons/css/line.css" type="text/css" rel="stylesheet" />
      </head>
      <body className="bg-slate-900">
        {children}
      </body>
    </html>
  )
}
