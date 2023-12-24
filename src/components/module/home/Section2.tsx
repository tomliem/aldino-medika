import Image from 'next/image'
import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'

export const Section2 = () => {
  return (
    <div id={menuKey[0]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h1 className="text-center text-3xl text-primary-yellow font-bold">About Us</h1>
      <div className="mt-4 bg-about-us w-full max-w-7xl">
        <div className="py-24 bg-primary-blue rounded-md bg-opacity-80 mx-4 my-8">
          <p className="text-center  text-white text-lg">
            Aldino Freight and trading PTE.LTD is one of Singapore's leading international Freight Forwarders and{' '}
            <span className="italic">door to door services</span> from around the world.
          </p>
          <p className="text-center  text-white text-lg mt-8">
            Established in 1995, our company is managed and developed by our experienced professional teams and agents
            from across the globe to be the best transportation partner, providing our valueable customers a trustworthy
            experience in building their companies with us.
          </p>
          <p className="text-center  text-white text-lg mt-2">
            Our company specializes in handling projects and door to door services to Indonesia via Singapore port. We
            are providing full assistance international shippers in providing import documentation, export
            documentation, freight consolidation, and foreign freight forwarding.
          </p>
          <p className="text-center  text-white text-lg mt-2">
            Singapore as our headquarter enables us to maintain a high quality in efficiency, speed, and accuracy in
            time arrival of your shipments with us.
          </p>
        </div>
      </div>
      <div className="mt-4 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-slate-300 bg-opacity-50 py-8 px-4">
            <h2 className="text-center text-primary-red text-xl">Vision</h2>
            <p className="mt-4 text-justify">Providing forwarding facilities from multinational companies from around the world.</p>
          </div>
          <div className="bg-slate-300 bg-opacity-50 py-8 px-4">
            <h2 className="text-center text-primary-blue text-xl">Mission</h2>
            <p className="mt-4 text-justify">
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
