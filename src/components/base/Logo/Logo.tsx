import Image from "next/image"
import LogoImage from '@statics/logo.png'

export const Logo = () => {
  return (
    <>
      <div className="block sm:hidden flex space-x-4">
        <img src="images/logo-icon-40.png" className="h-10"  alt="" />
      </div>
      <div className="sm:block hidden">
        <img src="images/logo-dark.png" className="h-[24px]" alt="" />
      </div>
    </>
  )
}
