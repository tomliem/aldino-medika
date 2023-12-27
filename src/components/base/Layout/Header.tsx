import { NavBar } from '@/components/base/Layout/NavBar/NavBar'
import { Logo } from '@/components/base/Logo/Logo'
import Image from 'next/image'

const Header = () => (
  <>
    <header className="w-full">
      <div className="bg-header-banner py-4 px-4 flex justify-between bg-no-repeat bg-cover">
        <a href="/" className="w-20 sm:w-32">
          <Logo />
        </a>
        <div className="flex flex-col justify-center text-primary-yellow font-semibold text-sm">
          <div>Hotline: (6221) - 5662013</div>
        </div>
      </div>
      <div className="py-2 px-2 sm:px-8 bg-primary-blue hidden md:block">
        <NavBar mode="Desktop" />
      </div>

      <div className="py-2 px-2 sm:px-8 bg-primary-blue block md:hidden">
        <NavBar mode="Mobile" />
      </div>
    </header>
  </>
)

export default Header
