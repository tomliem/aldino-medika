'use client'
import { FaWhatsappSquare, FaWhatsapp } from 'react-icons/fa'
import { waUrl } from '@/constants/agent'

export type WhatsappProps = {
  agent: keyof typeof waUrl
}
const Whatsapp = ({ agent }: WhatsappProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <a href={waUrl[agent]} className="items-center flex flex-row cursor-pointer">
        <div className="text-white  py-1 px-2 bg-primary-green mr-1 rounded-md">
          <div className="text-xs font-normal font-sans">More Info</div>
        </div>
        <div className="bg-white border-primary-green border-4 p-2 rounded-full">
          <FaWhatsapp size={20} color="#25D366" />
        </div>
      </a>
    </div>
  )
}
export default Whatsapp
