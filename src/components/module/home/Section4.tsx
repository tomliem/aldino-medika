import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'
import Image from 'next/image'

export const Section4 = () => {
  return (
    <div id={menuKey[2]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h1 className="text-center text-3xl text-primary-yellow font-bold">Our Services</h1>
      <div className="mt-4 w-full max-w-7xl">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="p-8 bg-slate-300 text-center text-lg font-bold">Transhipment</div>
            <div className="w-full h-64 relative">
              <Image alt="Services" src="/services-1.webp" style={{ objectFit: 'cover' }} fill />
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-8 bg-slate-300 text-center text-lg font-bold">Consolidation and Break-Bulk</div>
            <div className="w-full h-64 relative">
              <Image alt="Services" src="/services-1.webp" style={{ objectFit: 'cover' }} fill />
            </div>
          </div>

          <div className="col-span-4">
            <div className="p-8 bg-slate-300 text-center text-lg font-bold">Transportation and Project Forwarder</div>
            <div className="w-full h-64 relative">
              <Image alt="Services" src="/services-1.webp" style={{ objectFit: 'cover' }} fill />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 mt-4">
          <div className="col-span-4">
            <div className="p-8 bg-slate-300 text-center text-lg font-bold">Door to Door Services</div>
            <div className="w-full h-64 relative">
              <Image alt="Services" src="/services-1.webp" style={{ objectFit: 'cover' }} fill />
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-8 bg-slate-300 text-center text-lg font-bold">International Forwarding (Air and Sea)</div>
            <div className="w-full h-64 relative">
              <Image alt="Services" src="/services-1.webp" style={{ objectFit: 'cover' }} fill />
            </div>
          </div>

          <div className="col-span-4">
            <div className="p-8 bg-slate-300 text-center text-lg font-bold">Customs Brokerage and Documentation</div>
            <div className="w-full h-64 relative">
              <Image alt="Services" src="/services-1.webp" style={{ objectFit: 'cover' }} fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
