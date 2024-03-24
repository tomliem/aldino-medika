import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Image from 'next/image'

export const Section2 = () => {
  return (
    <section className="relative py-24 mx-auto w-full h-auto bg-white">
      <h1 className="text-primary-dark-yellow  text-center text-lg lg:text-3xl font-bold mx-4">
        Integrated Occupational Based Medical Healthcare and Services
      </h1>
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-24 gap-[30px]">
        <div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
          <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
            <i className="">
              <Image className="block group-hover:hidden" alt="" src="/icons/clinic-green.png" width={30} height={30} />
              <Image alt="" className="hidden group-hover:block" src="/icons/clinic-white.png" width={30} height={30} />
            </i>
          </div>

          <div className="content mt-6">
            <a href="" className="title text-lg font-semibold hover:text-emerald-600">
              OHS Center
            </a>
          </div>
        </div>

        <div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
          <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
            <i className="">
              <Image
                className="block group-hover:hidden"
                alt=""
                src="/icons/location-green.png"
                width={30}
                height={30}
              />
              <Image
                alt=""
                className="hidden group-hover:block"
                src="/icons/location-white.png"
                width={30}
                height={30}
              />
            </i>
          </div>

          <div className="content mt-6">
            <a href="" className="title text-lg font-semibold hover:text-emerald-600">
              OHS Coorporate <br /> On Site
            </a>
          </div>
        </div>

        <div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
          <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
            <i className="">
              <Image className="block group-hover:hidden" alt="" src="/icons/drugs-green.png" width={30} height={30} />
              <Image alt="" className="hidden group-hover:block" src="/icons/drugs-white.png" width={30} height={30} />
            </i>
          </div>

          <div className="content mt-6">
            <a href="" className="title text-lg font-semibold hover:text-emerald-600">
              OHS Drugs & Supplies
            </a>
          </div>
        </div>

        <div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
          <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
            <Image className="block group-hover:hidden" alt="" src="/icons/medical-green.png" width={30} height={30} />
            <Image alt="" className="hidden group-hover:block" src="/icons/medical-white.png" width={30} height={30} />
          </div>

          <div className="content mt-6">
            <a href="" className="title text-lg font-semibold hover:text-emerald-600">
              OHS Consultant & <br /> Assistant
            </a>
          </div>
        </div>

        <div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
          <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
            <Image
              className="block group-hover:hidden"
              alt=""
              src="/icons/presentation-green.png"
              width={30}
              height={30}
            />
            <Image
              alt=""
              className="hidden group-hover:block"
              src="/icons/presentation-white.png"
              width={30}
              height={30}
            />
          </div>

          <div className="content mt-6">
            <a href="" className="title text-lg font-semibold hover:text-emerald-600">
              OHS Training & <br /> Human Capital
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
