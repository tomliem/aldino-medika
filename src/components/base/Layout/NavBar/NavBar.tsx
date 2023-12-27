'use client'
import { NavLink } from './NavLink'
import { useCallback, useState } from 'react'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Drawer, IconButton, List, ListItem } from '@mui/material'
import { IoMenu } from 'react-icons/io5'
import { navbarItems } from '@/constants/menus'

const StyledNavLink = ({
  isActive,
  className = 'text-primary-yellow hover:text-primary-dark-yellow',
  ...linkProps
}: LinkProps & {
  isActive: boolean
  children: React.ReactNode
  className?: string
}) => <NavLink className={`${className ?? ''} ${isActive ? 'text-primary-dark-yellow' : ''}`} {...linkProps} />

function DesktopNavBar() {
  const pathname = usePathname()
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!)
  return (
    <>
      <nav
        className={`transition-all duration-500 ease-in-out md:block overflow-hidden  max-md:animate-sideways-once `}
      >
        <ul className="flex items-center flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-start text-sm md:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => {
            const id = ref.split('#')
            const isNewPage = id.length < 2
            return (
              <li key={ref} className="relative text-base font-semibold font-header">
                <StyledNavLink
                  isActive={ref === linkRef}
                  href={`${isNewPage ? '' : pathname}${ref}`}
                  onClick={() => {
                    if (isNewPage) return
                    const element = document.getElementById(id[1])
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                    setLinkRef(ref)
                  }}
                >
                  {label}
                </StyledNavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

const MobileNavBar = () => {
  const pathname = usePathname()
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!)
  const [state, setState] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navbarItems.map(({ ref, label }) => {
          const id = ref.split('#')
          const isNewPage = id.length < 2
          return (
            <ListItem key={label}>
              <StyledNavLink
                isActive={ref === linkRef}
                href={`${isNewPage ? '' : pathname}${ref}`}
                onClick={() => {
                  if (isNewPage) return
                  const element = document.getElementById(id[1])
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                  setLinkRef(ref)
                }}
              >
                {label}
              </StyledNavLink>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
  const handleOpen = () => setState(true)
  return (
    <>
      <IconButton onClick={handleOpen}>
        <IoMenu className="text-white" />
      </IconButton>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{
          className: 'bg-primary-blue font-semibold',
        }}
      >
        {list()}
      </Drawer>
    </>
  )
}
export const NavBar = ({ mode }: { mode: 'Desktop' | 'Mobile' }) => {
  if (mode === 'Desktop') return <DesktopNavBar />

  return <MobileNavBar />
}
