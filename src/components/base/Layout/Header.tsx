'use client'
import { NavBar } from '@/components/base/Layout/NavBar/NavBar'
import { Logo } from '@/components/base/Logo/Logo'
import clsx from 'clsx';
import { useWindowScroll } from 'react-use';

const Header = () => {
  const {y} = useWindowScroll();
  return (
    <>
      <header className={clsx("w-full sticky top-0 z-50 shadow-primary-dark transition-all", y > 60 ? 'shadow-md' : 'shadow-sm')}>
        <div className="bg-white py-4 px-4 flex justify-between bg-no-repeat bg-cover">
          <a href="/" className="w-20 sm:w-32">
            <Logo />
          </a>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="col-span-1 text-primary-dark font-semibold text-sm text-right">Hotline ID: </div>
            <div className="col-span-1 text-primary-blue font-bold text-sm text-left"><a href="tel:+62215662013">(+6221) - 5662013</a></div>
            <div className="col-span-1 text-primary-dark font-semibold text-sm text-right">Hotline SG: </div>
            <div className="col-span-1 text-primary-blue font-bold text-sm text-left"><a href="tel:+6567445711">(+65) - 67445711</a></div>
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
}

export default Header
