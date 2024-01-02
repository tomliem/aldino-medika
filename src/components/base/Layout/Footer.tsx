import './footer.css'

import { Logo } from '@/components/base/Logo/Logo'
import Image from 'next/image'

const Footer = () => (
  <footer>
    <div className="py-5 px-2 text-white bg-primary-dark mt-8">
      <Logo />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="ml-4 mt-4">
            <div>Jl. Muwardi No. 22, Jakarta Barat 11450</div>
            <a href="mailto:info@aldinofnt.com" className="mt-4">info@aldinofnt.com</a>
            <a href="tel:+62215662013" className="">(+6221)-5662013</a>
          </div>
        </div>

        <div className="col-span-1">
          <div className="ml-4 mt-4">
            <div>51, Ubi Avenue 1 #01-27 Paya Ubi Industrial Park, Singapore 408933</div>
            <a href="mailto:info@aldinofnt.com" className="mt-4">info@aldinofnt.com</a>
            <a href="tel:+6567445711" className="">(+65)-67445711</a>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5 px-2 sm:px-8 bg-primary-blue text-white text-center  lg:text-base text-xs">
      © ALDINO FREIGHT AND TRADING {new Date().getFullYear()}. ALL RIGHT RESERVED
    </div>
  </footer>
)

export default Footer
