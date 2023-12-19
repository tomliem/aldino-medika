'use client'
import { NavLink } from './NavLink'
import { useCallback, useState } from 'react'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

const navbarItems = [
  { ref: '/#about-us', label: 'About Us' },
  { ref: '/#insight', label: 'Insight' },
  { ref: '/#services', label: 'Our Services' },
  { ref: '/#client', label: 'Our Client' },
]

const StyledNavLink = ({
  isActive,
  className = 'text-primary-yellow hover:text-primary-dark-yellow',
  ...linkProps
}: LinkProps & {
  isActive: boolean
  children: React.ReactNode
  className?: string
}) => (
  <NavLink
    className={`${className ?? ''} ${isActive ? 'text-primary-dark-yellow' : ''}`}
    {...linkProps}
  />
)

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const pathname = usePathname()
  console.log(pathname)
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!)
  const toggleOpen = useCallback(() => setIsMenuShown(!isMenuShown), [isMenuShown])
  return (
    <>
      <nav
        className={`transition-all duration-500 ease-in-out md:block overflow-hidden  max-md:animate-sideways-once `}
      >
        <ul className="flex items-center flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-center text-sm md:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref} className="relative text-base font-semibold font-header">
              <StyledNavLink
                isActive={ref === linkRef}
                href={`${pathname}${ref}`}
                onClick={() => {
                  const id = ref.split('#')

                  const element = document.getElementById(id[1])
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                  setLinkRef(ref)
                  setIsMenuShown(false)
                }}
              >
                {label}
              </StyledNavLink>
              <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
