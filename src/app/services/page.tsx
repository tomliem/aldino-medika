'use client'
import Footer from '@/components/base/Layout/Footer'
import Header from '@/components/base/Layout/Header'
import { Section2 } from '@/components/module/home/Section2'
import { ThemeProvider } from '@mui/material'
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles'
import Link from 'next/link'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

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
  const params = useSearchParams()
  const defaultTab = params.get('tab')
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <section className="aboutUs relative table w-full py-20 bg-[url('/images/banner-about-us.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-emerald-900/75"></div>
            <div className="relative container">
              <div className="grid grid-cols-1 text-center mt-10">
                <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
                  Services
                </h3>
              </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
              <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li
                  className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
                  aria-current="page"
                >
                  Services
                </li>
              </ul>
            </div>
          </section>
          <Section2 defaultTab={defaultTab ? Number(defaultTab) : 0} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
