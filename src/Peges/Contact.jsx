import React from 'react'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaLocationArrow } from 'react-icons/fa6'
import HeroCard from '../components/HeroCard'
import Button from '../components/Button'
import chat from '../components/Img/chat.png'
import flagUs from '../components/Img/flag-us.png'

const inputCls =
  'h-[42px] w-full rounded-sm bg-field px-[14px] text-sm text-white outline-none placeholder:text-[#a0a0a0]'

const contactInfo = [
  { icon: HiOutlineEnvelope, label: 'Email', lines: ['contact@catalystanalytics.io'] },
  { icon: HiOutlinePhone, label: 'Phone', lines: ['(469) 712-4672'] },
  {
    icon: HiOutlineMapPin,
    label: 'Office',
    lines: ['5511 Parkcrest Dr, Suite 103', 'Austin, TX 78731', 'United States'],
  },
]

const Contact = () => {
  return (
    <main>
      <HeroCard image={chat} imageAlt="Chat" imageClassName="lg:top-[56px] lg:left-[797px] lg:w-[340px]">
        <h1 className="text-[32px] leading-[44px] font-semibold md:text-[40px] md:leading-[48px]">Contact Us</h1>
        <p className="mt-6 max-w-[560px] text-base leading-6 text-[#e8e8e8]">
          Get in touch with our team to discuss how we can help transform your business. We're here to help.
        </p>
        <Button className="mt-[50px] h-[42px] w-[188px] text-sm font-semibold">Get In Touch Now</Button>
      </HeroCard>

      <section className="mx-auto grid max-w-[1262px] grid-cols-1 gap-[29px] px-4 pt-[91px] pb-[110px] lg:grid-cols-[642px_1fr]">
        <form className="rounded-3xl bg-card px-6 py-10 md:px-10">
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
          <div className="mt-[30px] flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              <input type="text" placeholder="First Name" className={inputCls} />
              <input type="text" placeholder="Last Name" className={inputCls} />
            </div>
            <input type="email" placeholder="Email" className={inputCls} />
            <input type="text" placeholder="Company" className={inputCls} />
            <div className="flex h-[42px] items-center gap-[10px] rounded-sm bg-field pl-[6px]">
              <span className="flex h-[34px] items-center gap-1 rounded-sm bg-[#2b2b2b] px-2 text-xs text-[#a0a0a0]">
                <img src={flagUs} alt="US" className="size-[17px]" />
                +1
                <IoMdArrowDropdown />
              </span>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#a0a0a0]"
              />
            </div>
            <textarea
              placeholder="Message"
              className="h-[114px] w-full resize-none rounded-sm bg-field px-[14px] py-3 text-sm text-white outline-none placeholder:text-[#a0a0a0]"
            />
            <button
              type="button"
              className="flex h-[46px] w-full items-center justify-center gap-2 rounded-sm bg-accent text-sm font-medium"
            >
              Send <FaLocationArrow className="text-xs" />
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-[25px]">
          <div className="rounded-3xl bg-card px-6 py-10 md:px-10">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div className="mt-[22px] flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-3">
                  <Icon className="mt-0.5 shrink-0 text-xl text-accent" />
                  <div>
                    <p className="text-base font-semibold">{label}</p>
                    {lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-[#d0d0d0]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card px-6 py-10 md:px-10">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="mt-6 text-sm leading-5 text-[#d0d0d0]">
              Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of
              experts. We'll help you understand how our solutions can benefit your business.
            </p>
            <Button className="mt-5 h-[42px] w-full text-sm font-semibold">Book a Meeting</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
