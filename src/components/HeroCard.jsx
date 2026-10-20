import React from 'react'

const circuit = [
  'left-[96px] top-[47px] h-[188px] w-[94px] border rounded-lg',
  'left-[190px] top-[15px] h-[32px] w-[95px] border-r border-b rounded-br-lg',
  'left-[190px] top-[140px] h-[95px] w-[95px] border rounded-lg',
  'left-[3px] top-[140px] h-[95px] w-[93px] border-t border-l rounded-tl-lg',
  'left-[96px] top-[235px] h-[95px] w-[94px] border-r border-b rounded-br-lg',
  'left-[96px] top-[330px] h-[46px] w-0 border-l',
  'left-[290px] top-[235px] h-[85px] w-[94px] border-t border-l rounded-tl-lg',
  'left-[384px] top-[140px] h-[95px] w-[188px] border-t border-l rounded-tl-lg',
  'left-[478px] top-[110px] h-[30px] w-[94px] border-r border-b rounded-br-lg',
  'left-[384px] top-[235px] h-[95px] w-[94px] border rounded-lg',
  'left-[478px] top-[235px] h-[95px] w-[94px] border rounded-lg',
  'left-[478px] top-[330px] h-[46px] w-0 border-l',
]

const HeroCard = ({ image, imageAlt = '', imageClassName = '', children }) => {
  return (
    <section className="mx-auto max-w-[1290px] px-4 pt-[53px]">
      <div className="relative overflow-hidden rounded-[40px] bg-card bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[23.5px_23.5px] lg:h-[376px]">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {circuit.map((cls) => (
            <span key={cls} className={`absolute border-[#3d3d3d] ${cls}`} />
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-center px-6 pt-12 pb-8 md:px-[66px] lg:h-full lg:pb-0 lg:pt-0">
          {children}
        </div>

        <img
          src={image}
          alt={imageAlt}
          className={`relative mx-auto max-w-full lg:absolute lg:mx-0 lg:max-w-none ${imageClassName}`}
        />
      </div>
    </section>
  )
}

export default HeroCard
