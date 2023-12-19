'use client'
import { FaWhatsappSquare } from 'react-icons/fa'
import { waUrl } from '@/constants/agent'

export type WhatsappProps = {
  agent: keyof typeof waUrl
}
const Whatsapp = ({ agent }: WhatsappProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <a href={waUrl[agent]} className="items-center flex flex-row cursor-pointer">
        <div className="text-white  py-1 px-2 bg-[#25D366] border-white border-y-4 border-l-4">
          <div className="text-xs lg:text-base font-normal font-sans">More Info</div>
        </div>
        <div className="bg-white rounded-lg">
          <FaWhatsappSquare size={70} color="#25D366" />
        </div>
      </a>
    </div>
  )
}
export default Whatsapp
