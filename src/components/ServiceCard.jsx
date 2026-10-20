import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const ServiceCard = ({ image, title, text, items, arrowRight = false, highlighted = false }) => {
  const arrow = (
    <span className="flex h-9 w-[52px] items-center justify-center rounded-full bg-accent-light text-sm text-white">
      <FaArrowRight />
    </span>
  )

  return (
    <div
      className={`flex flex-col items-center rounded-[40px] bg-card px-6 pt-[46px] pb-[42px] text-center md:px-[54px] ${highlighted ? 'border border-[#2b5d99]' : 'border border-transparent'}`}
    >
      <div className="flex h-[230px] items-center justify-center">
        <img src={image} alt={title} />
      </div>
      <h3 className="mt-[42px] text-2xl font-semibold">{title}</h3>
      <p className="mt-6 text-base leading-6 text-[#e0e0e0]">{text}</p>

      <ul className="mt-9 grid w-full grid-cols-1 gap-y-[14px] text-left sm:grid-cols-[235px_1fr] md:pl-[10px]">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-[10px] text-sm text-[#e0e0e0]">
            <span className="size-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      <span className="mt-[38px] flex h-14 items-center gap-[14px] rounded-full border border-[#2b5d99] px-[15px] text-sm text-[#e0e0e0]">
        {!arrowRight && arrow}
        Book a Call
        {arrowRight && arrow}
      </span>
    </div>
  )
}

export default ServiceCard
