import { menuKey } from '@/constants/menus'
import Link from 'next/link'

export const SectionAboutUs = () => {
  return (
    <section className="aboutUs relative table w-full py-36 bg-[url('/images/banner-about-us.jpg')] bg-center bg-no-repeat bg-cover">
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
  )
}
