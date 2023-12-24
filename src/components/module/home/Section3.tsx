import Image from 'next/image'
import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'

export const Section3 = () => {
  return (
    <div id={menuKey[1]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h1 className="text-center text-3xl text-primary-yellow font-bold">Insight</h1>
      <div className="mt-4 w-full max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <div className="p-8 border-2 h-full border-primary-blue text-center text-lg font-bold flex items-center justify-center">1</div>
          </div>
          <div className="col-span-9">
            <div className="bg-primary-blue text-white text-justify h-full px-8 py-4 flex items-center">
              Many companies are struggling due to too many freight and transportation / logistic services. Too many
              ports and different companies to handle their goods increased risk of fraud, damage, and loss of their
              goods are the most of the issues.
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-primary-blue text-white py-4 text-justify h-full px-8 flex items-center">
              Aldino Freight and Trading PTE.LTD is the best solution to overcome all the risk. We offer our valueable
              customers a full transportation solution, covering all their requirements within our network.
            </div>
          </div>
          <div className="col-span-3">
            <div className="p-8 h-full border-2 border-primary-blue text-center text-lg font-bold flex items-center justify-center">2</div>
          </div>

          <div className="col-span-3">
            <div className="p-8 h-full border-2 border-primary-blue text-center text-lg font-bold flex items-center justify-center">3</div>
          </div>
          <div className="col-span-9">
            <div className="bg-primary-blue text-white py-4 text-justify h-full px-8 flex items-center">
              Providing a comprehensive, global network of professional affiliates and agents worldwide to insure a
              prompt, reliable, and intact transportation of international cargo by us (Aldino Freight and Trading
              PTE.LTD).
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
