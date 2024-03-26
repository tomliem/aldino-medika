'use client'
import * as React from 'react'
import {
  styled,
  alpha,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  List,
  Typography,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Button, { ButtonProps } from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import CloseIcon from '@mui/icons-material/Close'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Logo } from '@/components/base/Logo/Logo'
import clsx from 'clsx'
import { useWindowScroll } from 'react-use'
import { Avatar } from '@mui/material'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const StyledButton = styled((props: ButtonProps) => <Button {...props} />)(({}) => ({
  '& .MuiButtonBase-root': {
    background: 'transparent',
  },
}))

const StyledSearch = styled((props: TextFieldProps) => <TextField {...props} />)(({}) => ({
  '& fieldset': {
    borderRadius: '9999px',
  },
}))
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))

interface MenuWithDropdownProps {
  label: string
}
const MenuWithDropdown = ({ label }: MenuWithDropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        color="aldinoGreen"
        className="bg-transparent hover:bg-primary-lightGreen"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {label}
      </StyledButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
      </StyledMenu>
    </>
  )
}

const AvatarWithMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Avatar alt="Remy Sharp" src="/01.jpg" className="cursor-pointer" onClick={handleClick} />

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
      </StyledMenu>
    </>
  )
}
const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false)
  const { y } = useWindowScroll()
  const isScrolled = y > 10
  return (
    <>
      <nav id="topnav" className={clsx('defaultscroll py-4 is-sticky', isScrolled ? 'nav-sticky' : '')}>
        <div className="max-w-7xl px-4 flex mx-auto justify-between">
          <a className="logo" href="">
            <Logo />
          </a>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center">
              <a href="">
                <StyledButton
                  className="text-white bg-transparent hover:bg-primary-lightGreen"
                  disableElevation
                  variant="contained"
                  color="aldinoGreen"
                >
                  HOME
                </StyledButton>
              </a>

              <a href="/about-us">
                <StyledButton
                  className="text-white bg-transparent hover:bg-primary-lightGreen"
                  disableElevation
                  variant="contained"
                  color="aldinoGreen"
                >
                  ABOUT US
                </StyledButton>
              </a>

              <a href="/services">
                <StyledButton
                  className="text-white bg-transparent hover:bg-primary-lightGreen"
                  disableElevation
                  variant="contained"
                  color="aldinoGreen"
                >
                  SERVICES
                </StyledButton>
              </a>
              {/* <MenuWithDropdown label="Services" /> */}

              <a href="/contact-us">
                <StyledButton
                  className="text-white bg-transparent hover:bg-primary-lightGreen"
                  disableElevation
                  variant="contained"
                  color="aldinoGreen"
                >
                  CONTACT US
                </StyledButton>
              </a>
            </div>
            {/* <div className="bg-white rounded-full hidden lg:flex">
              <StyledSearch placeholder="Search..." variant="outlined" size="small" />
            </div> */}
            <div className="flex space-x-4 items-center ">
              {/* <a href="#" className="text-white hidden lg:block">
                Sign In
              </a>
              <AvatarWithMenu /> */}
              <IconButton
                className="bg-primary-lightGreen rounded-full lg:hidden"
                onClick={() => setOpenMobileMenu(true)}
              >
                <MenuIcon className="text-white" />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        fullScreen
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setOpenMobileMenu(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <a href="/">HOME</a>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <a href="/about-us">ABOUT US</a>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <a href="/services">SERVICES</a>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <a href="/contact-us">CONTACT US</a>
          </ListItemButton>
        </List>
      </Dialog>
    </>
  )
}

export default Header
