'use client'
import { NavBar } from '@/components/base/Layout/NavBar/NavBar'
import { Logo } from '@/components/base/Logo/Logo'
import clsx from 'clsx';
import { useScroll, useWindowScroll } from 'react-use';

const Header = () => {
  const {y} = useWindowScroll();
  return (
    <>
      <header className={clsx("w-full sticky top-0 z-50 shadow-primary-dark transition-all", y > 60 ? 'shadow-md' : 'shadow-sm')}>
        <div className="bg-white py-4 px-4 flex justify-between bg-no-repeat bg-cover">
          <a href="/" className="w-20 sm:w-32">
            <Logo />
          </a>
          <div className="flex flex-col justify-center text-primary-yellow font-semibold text-sm">
            <a href="tel:+62215662013">Hotline ID: (+6221) - 5662013</a>
            <a href="tel:+6567445711">Hotline SG: (+65) - 67445711</a>
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
