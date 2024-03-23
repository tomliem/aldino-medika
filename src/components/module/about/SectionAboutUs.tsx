import { menuKey } from '@/constants/menus'
import Link from 'next/link'

export const SectionAboutUs = () => {
  return (
    <>
      <section className="aboutUs relative table w-full py-20 bg-[url('/images/banner-about-us.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/75"></div>
        <div className="relative container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              About Us
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
              About Us
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[6px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 48 H 1437.5 H 2880 V 0 H 2881 C 1437 49 1439 47 1 1 H 1 V 48 Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="bg-white">
        <div className="container">
          <h1 className="text-3xl text-center pt-8 font-semibold text-primary-green">
            <span>We are the first and largest Occupational Integrated Based</span>
            <span>at Strategic Location in Cikarang Area with 13.000 m2</span>{' '}
          </h1>
          <h5 className="pb-6 text-center font-semibold">
            (In between Jababeka Industrial Area and Lippo Cikarang Industrial Area with over 2.215 factories from 25
            different countries)
          </h5>
        </div>
      </section>
    </>
  )
}
