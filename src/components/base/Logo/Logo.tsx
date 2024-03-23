import Image from "next/image"
import LogoImage from '@statics/logo.png'

export const Logo = () => {
  return (
    <>
      <div className="block sm:hidden space-x-4  rounded-full">
        <img src="images/logo-main-desktop.png" className="h-[36px]"  alt="" />
      </div>
      <div className="sm:block hidden rounded-full">
        <img src="images/logo-main-desktop.png" className="h-[56px]" alt="Logo Desktop" />
      </div>
    </>
  )
}
