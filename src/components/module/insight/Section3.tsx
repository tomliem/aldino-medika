import Image from 'next/image'
import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'

export const Section3 = () => {
  return (
    <div id={menuKey[1]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h1 className="text-center text-3xl text-primary-yellow font-bold">Insight</h1>
      <div className="bg-primary-red h-2 w-14 mt-4"></div>
      <div className="mt-8 w-full max-w-7xl">
        <div className="grid grid-cols-12 gap-2 lg:gap-4">
          <div className="col-span-3">
            <div className="py-12 bg-plane bg-blend-multiply bg-opacity-30 bg-black bg-cover bg-center shadow-black text-white shadow-inner h-full  text-center text-3xl font-bold flex items-center justify-center">1</div>
          </div>
          <div className="col-span-9">
            <div className="bg-white text-primary-dark text-left h-full px-2 lg:px-8 py-2 lg:py-4 flex items-center">
              Many companies are struggling due to too many freight and transportation / logistic services. Too many
              ports and different companies to handle their goods increased risk of fraud, damage, and loss of their
              goods are the most of the issues.
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white text-primary-dark py-2 lg:py-4 text-right h-full px-2 lg:px-8 flex items-center">
              Aldino Freight and Trading PTE.LTD is the best solution to overcome all the risk. We offer our valueable
              customers a full transportation solution, covering all their requirements within our network.
            </div>
          </div>
          <div className="col-span-3">
            <div className="py-12 bg-blend-multiply shadow-black h-full bg-cover bg-no-repeat bg-center bg-ship text-center text-3xl font-bold flex text-white bg-black bg-opacity-30 items-center justify-center">2</div>
          </div>

          <div className="col-span-3">
            <div className="py-12 text-white bg-blend-multiply bg-opacity-30 bg-black h-full bg-truck bg-cover bg-no-repeat bg-center shadow-black text-center text-3xl font-bold flex items-center justify-center">3</div>
          </div>
          <div className="col-span-9">
            <div className="bg-white text-primary-dark py-2 lg:py-4 text-left h-full px-2 lg:px-8 flex items-center">
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
