import React from 'react'
import { HiPlus, HiXMark } from 'react-icons/hi2'

const FaqItem = ({ num, question, answer, open = false }) => {
  return (
    <div className={`rounded-[32px] px-6 md:px-[50px] ${open ? 'bg-card-3 pt-[34px] pb-[50px]' : 'bg-card py-[30px]'}`}>
      <div className="flex items-center gap-5 md:gap-[30px]">
        <span
          className={`flex size-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-b from-[#222222] to-[#141414] text-2xl font-medium md:size-20 md:text-[28px] ${open ? 'text-accent' : 'text-white'}`}
        >
          {num}
        </span>
        <h3 className={`flex-1 text-lg font-medium md:text-[22px] ${open ? 'text-accent' : 'text-white'}`}>
          {question}
        </h3>
        {open ? (
          <HiXMark className="shrink-0 text-[28px] text-accent" />
        ) : (
          <HiPlus className="shrink-0 text-[28px] text-white" />
        )}
      </div>
      {open && (
        <p className="mt-3 text-lg leading-[27px] text-[#d0d0d0] md:ml-[110px] md:pr-[20px]">{answer}</p>
      )}
    </div>
  )
}

export default FaqItem
