import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'
import Image from 'next/image'

export const Section5 = () => {
  return (
    <div id={menuKey[2]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h1 className="text-center text-3xl text-primary-yellow font-bold">Our Client</h1>
      <div className="mt-4 w-full max-w-7xl">
        
      </div>
    </div>
  )
}
