'use client'
import { NavLink } from './NavLink'
import { useCallback, useState } from 'react'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Drawer, IconButton, List, ListItem, Popover } from '@mui/material'
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
}) => <NavLink className={`${className ?? ''} ${isActive ? 'text-primary-dark-yellow' : 'text-white'}`} {...linkProps} />

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
                  isActive={ref === pathname}
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
  const [state, setState] = useState<HTMLButtonElement | null>(null)

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
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
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setState(event.currentTarget);
  }
  
  const isOpen = Boolean(state);
  const id = isOpen ? 'simple-popover' : undefined;
  return (
    <>
      <IconButton aria-describedby={id} onClick={handleOpen}>
        <IoMenu className="text-white" />
      </IconButton>
      <Popover
        open={isOpen}
        anchorEl={state}
        onClose={() => setState(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          className: 'bg-primary-blue'
        }}
      >
        {list()}
      </Popover>
    </>
  )
}
export const NavBar = ({ mode }: { mode: 'Desktop' | 'Mobile' }) => {
  if (mode === 'Desktop') return <DesktopNavBar />

  return <MobileNavBar />
}
