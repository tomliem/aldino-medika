import { menuKey } from '@/constants/menus'
import Image from 'next/image'
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
          <h1 className="text-lg lg:text-3xl text-center pt-8 font-bold lg:font-semibold text-primary-green">
            <span>We are the first and largest integrated occupational health safety service provider</span>
            <span>
              located in the heart of strategic location within Cikarang Area on 13.000 m2 area to be developed to
              provide the best one stop service solution to the society.
            </span>{' '}
          </h1>
          <h5 className="pb-6 text-sm lg:text-base text-center font-semibold">
            (In between Jababeka Industrial Area and Lippo Cikarang Industrial Area with over 2.215 factories from 25
            different countries)
          </h5>
          <div className="h-auto pb-24 lg:h-[720px] w-full mt-8 lg:mt-16">
            <div className="grid grid-cols-12 lg:hidden gap-6">
              <div className="bg-white z-2 mx-auto border border-gray-300 rounded-md p-2 w-fit col-span-12">
                <Image src="/images/image-about-docter.jpg" alt="About Aldino Medika" width={300} height={400} />
              </div>

              <div className="col-span-12">
                <span className="text-primary-green font-semibold">Aldino Medika Indonesia</span> pioneers integrated
                occupational healthcare services, revolutionazing workplace wellness with innovative solutions. Our
                focus is on transforming occupational health practices, ensuring employee well-being, and enhancing
                productivity.
              </div>

              <div className="col-span-12 text-right mt-12">
                <div className="text-primary-green font-semibold">Our Vision</div>
                <p>
                  To become a comprehensive integrated, and professional center for health and occupational safety
                  services with the highest standards.
                </p>
              </div>
              <div className="col-span-12 text-right mt-6">
                <div className="text-primary-green font-semibold">Our Mission</div>
                <p>
                  To provide complete health and occupational safety services with professionalism and the highest
                  standards.
                </p>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2">
              <div className="relative h-full">
                <div className="bg-white z-2 top-0 left-0 absolute border border-gray-300 rounded-md p-2 w-fit">
                  <Image src="/images/image-about-docter.jpg" alt="About Aldino Medika" width={300} height={400} />
                </div>
                <div className="absolute z-1 after:content-[''] after:bg-white after:rounded-full after:w-64 after:flex after:mt-[30px] after:mx-auto after:h-64 w-80 h-80 top-[78px] left-[72px] bg-primary-lightGreen rounded-full"></div>
                <div className="bg-white absolute transform translate-y-1/2 z-3 left-1/3 border border-gray-300 rounded-md p-2 w-fit">
                  <Image src="/images/image-about-stetos2.jpg" alt="About Aldino Medika" width={300} height={300} />
                </div>
              </div>
              <div className="relative text-lg">
                <div>
                  <span className="text-primary-green font-semibold">Aldino Medika</span> pioneers integrated
                  occupational healthcare services, revolutionazing workplace wellness with innovative solutions. Our
                  focus is on transforming occupational health practices, ensuring employee well-being, and enhancing
                  productivity.
                </div>

                <div className="text-right mt-24">
                  <div className="text-primary-green font-semibold">Our Vision</div>
                  <p>
                    Menjadi pusat layanan kesehatan dan keselamatan kerja yang lengkap, terintegrasi, dan profesional
                    dengan standar terbaik.
                  </p>
                </div>
                <div className="text-right mt-12">
                  <div className="text-primary-green font-semibold">Our Mission</div>
                  <p>
                    Memberikan layanan kesehatan dan keselamatan kerja yang lengkap dengan profesionalisme dan standar
                    terbaik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
