'use client'
import Footer from '@/components/base/Layout/Footer'
import Header from '@/components/base/Layout/Header'
import { Section1 } from '@/components/module/home/Section1'
import { Section2 } from '@/components/module/home/Section2'
import { ThemeProvider } from '@mui/material'
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles'

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
          <Section1 />
          <Section2 shouldUseLink />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
