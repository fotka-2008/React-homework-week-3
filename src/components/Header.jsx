import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './Img/logo.png'
import Button from './Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/career-details', label: 'Career Details' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  return (
    <header className="bg-page">
      <div className="mx-auto flex h-24 max-w-[1290px] items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Catalyst Analytics" className="h-[52px] w-[44px]" />
          <span className="text-lg leading-5 font-bold">
            Catalyst
            <br />
            Analytics
          </span>
        </Link>

        <nav className="hidden items-center gap-[42px] lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-base tracking-[0.2px]"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button to="/contact" className="h-[42px] w-[140px] text-sm font-semibold max-sm:hidden">
          Contact Us
        </Button>
      </div>
    </header>
  )
}

export default Header
