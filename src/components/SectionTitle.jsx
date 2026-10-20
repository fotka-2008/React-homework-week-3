import React from 'react'

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="mx-auto max-w-[600px] text-[32px] leading-[56px] font-semibold md:text-[40px]">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-[660px] text-base leading-6 text-[#d0d0d0]">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
