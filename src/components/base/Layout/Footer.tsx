import './footer.css'

import { Logo } from '@/components/base/Logo/Logo'
import Image from 'next/image'

const Footer = () => (
  <footer>
    <div className="py-5 px-2 text-white bg-primary-dark mt-8">
      <Logo />
      <div className="ml-4 mt-4">
        <div>PT ABC</div>
        <div>Jl. Gading Serpong Boulevard</div>
        <div className="mt-4">info@aldinofnt.com</div>
        <div className="">(6221)-5662013</div>
      </div>
    </div>
    <div className="py-5 px-2 sm:px-8 bg-primary-blue text-white text-center">
      © ALDINO FREIGHT AND TRADING {new Date().getFullYear()}. ALL RIGHT RESERVED. PT ABC
    </div>
  </footer>
)

export default Footer
