import './footer.css'

import { Logo } from '@/components/base/Logo/Logo'
import { phone } from '@/constants/agent'

const Footer = () => (
  <footer>
    <div className="py-5 px-2 text-primary-dark bg-primary-green">
      <Logo />
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white">
        <div className="col-span-1">
          <div className="ml-4 mt-4">
            {/* <div className="font-bold italic">Office</div> */}
            <div>
              Kawasan Industri Jababeka, <br />
              Jl. Tegal Danas No.673 <br />
              Jaya Mukti, Cikarang Pusat, Bekasi <br />
              17530 Jawa Barat
            </div>
            <div>
              <a href="mailto:customer.relations@aldinomedika.co.id" className="mt-4">
                customer.relations@aldinomedika.co.id
              </a>
            </div>
            <div>
              <a href={`tel:+${phone.csOne}`} className="">
                {phone.csOne}
              </a>
            </div>
          </div>
        </div>

        {/* <div className="col-span-1">
          <div className="ml-4 mt-4">
            <div className="font-bold italic">Singapore Office</div>
            <div>51, Ubi Avenue 1 #01-27 Paya Ubi Industrial Park, Singapore 408933</div>
            <div>
              <a href="mailto:info@aldinofnt.com" className="mt-4">
                info@aldinofnt.com
              </a>
            </div>
            <div>
              <a href="tel:+6567445711" className="">
                (+65)-67445711
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="py-5 px-2 sm:px-8 bg-primary-dark text-white text-center  lg:text-base text-xs">
      © ALDINO MEDIKA {new Date().getFullYear()}. ALL RIGHT RESERVED
    </div>
  </footer>
)

export default Footer
