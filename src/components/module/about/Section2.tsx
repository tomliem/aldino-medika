import Image from 'next/image'
import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'

export const Section2 = () => {
  return (
    <div id={menuKey[0]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h6 className="text-primary-gray text-base text-center">About Us</h6>
      <h1 className="text-center text-4xl text-primary-yellow font-bold mt-2">Your Best Partner in Transportation</h1>
      <div className="bg-primary-red h-2 w-14 mt-4"></div>
      <div className="mt-8 w-full max-w-7xl relative flex items-center group">
        <div className="absolute top-0 h-[490px] right-0 w-11/12 md:w-3/4 overflow-hidden ">
          <div className="bg-about-us w-full h-full transform scale-100 group-hover:scale-125 duration-700 transition-all bg-contain group-hover:bg-right"></div>
        </div>
        <div className="py-6 bg-primary-blue group-hover:bg-opacity-100 duration-1000 transition-all z-50 relative w-10/12  md:w-3/5 rounded-md bg-opacity-90 md:bg-opacity-80 mx-0 md:mx-8 my-8 px-6">
          <p className="text-lg md:text-2xl font-bold text-white">Aldino Freight and trading PTE.LTD </p>
          <p className="mt-4 text-white text-sm md:text-xl">
            is one of Singapore's leading international Freight Forwarders and{' '}
            <span className="italic">door to door services</span> from around the world.
          </p>
          <p className="mt-4  text-white text-sm md:text-xl">
            Established in 1995, our company is managed and developed by our experienced professional teams and agents
            from across the globe to be the best transportation partner, providing our valueable customers a trustworthy
            experience in building their companies with us.
          </p>
          <p className="mt-4 text-white text-sm md:text-xl">
            Our company specializes in handling projects and door to door services to Indonesia via Singapore port. We
            are providing full assistance international shippers in providing import documentation, export
            documentation, freight consolidation, and foreign freight forwarding.
          </p>
          <p className="text-white text-sm md:text-xl mt-4">
            Singapore as our headquarter enables us to maintain a high quality in efficiency, speed, and accuracy in
            time arrival of your shipments with us.
          </p>
        </div>
      </div>
      <div className="mt-8 max-w-7xl w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="bg-opacity-50 py-8 px-8 vision-card">
            <div className="bg-overlay"></div>
            <h2 className="text-left text-4xl font-bold">Vision</h2>
            <p className="mt-4 text-justify pr-24">Providing forwarding facilities from multinational companies from around the world.</p>
          </div>
          <div className="bg-opacity-50 py-8 px-4 mission-card">
            <div className="bg-overlay"></div>
            <h2 className="text-left text-4xl pl-24 font-bold">Mission</h2>
            <p className="mt-4 text-justify pl-24">
              Providing premium services with the most efficient cost to our customers. Making customer satisfaction as
              our top priority. Becoming the most reliable company as a business development partner in logistic
              section.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
