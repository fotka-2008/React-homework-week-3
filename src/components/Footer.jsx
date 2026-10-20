import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { IoMail, IoCall, IoLocationSharp } from 'react-icons/io5'
import logo from './Img/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/', label: 'Portfolio' },
  { to: '/', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
]

const socials = [FaFacebook, FaTwitter, FaLinkedin]

const contacts = [
  { icon: IoMail, text: 'contact@catalystanalytics.io' },
  { icon: IoCall, text: '+1 (469) 712-4672' },
  { icon: IoLocationSharp, text: '5511 Parkcrest Dr, Suite 103, Austin, TX 78731' },
]

const Footer = () => {
  return (
    <footer className="border-t border-[#858585] bg-page">
      <div className="mx-auto max-w-[1290px] px-4">
        <div className="flex flex-col items-center gap-8 pt-12 lg:flex-row lg:justify-between lg:gap-4">
          <Link to="/" className="flex items-center gap-3 lg:w-[256px]">
            <img src={logo} alt="Catalyst Analytics" className="h-[52px] w-[44px]" />
            <span className="text-lg leading-5 font-bold">
              Catalyst
              <br />
              Analytics
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-[31px] gap-y-3">
            {links.map((link) => (
              <Link key={link.label} to={link.to} className="text-lg">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-[14px] rounded-xl border border-[#2a2a2a] p-[13px]">
            {socials.map((Icon, i) => (
              <span
                key={i}
                className="flex size-16 items-center justify-center rounded-md bg-linear-to-b from-[#232323] to-[#090909] text-[26px] text-accent"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-[30px]">
            {contacts.map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-3 border-b border-[#262626] pb-0.5 text-lg">
                <Icon className="text-2xl text-accent" />
                {text}
              </span>
            ))}
          </div>
          <div className="flex gap-6 text-lg text-[#8a8a8a]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

        <p className="py-11 text-center text-lg text-[#8a8a8a]">
          © 2025 Catalyst Analytics. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
