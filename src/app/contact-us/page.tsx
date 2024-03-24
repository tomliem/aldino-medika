'use client'
import Image from 'next/image'
import ComingSoon from '@statics/banner-coming-soon.jpg'
import Header from '@/components/base/Layout/Header'
import { Section1 } from '@/components/module/home/Section1'
import { ThemeProvider } from '@mui/material'
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles'
import { SectionAboutUs } from '@/components/module/about/SectionAboutUs'
import { SectionContactUs } from '@/components/module/contact/SectionContactUs'
import Footer from '@/components/base/Layout/Footer'

const violetBase = '#31ddd1'
const violetMain = alpha(violetBase, 0.7)
const theme = createTheme({
  palette: {
    aldinoGreen: {
      main: violetMain,
      light: alpha(violetBase, 0.7),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 1.5 ? '#fff' : '#111',
    },
  },
})
export default function HomeNew() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <SectionContactUs />
        </main>

        <Footer />
      </ThemeProvider>
    </>
  )
}
