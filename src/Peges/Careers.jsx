import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import HeroCard from '../components/HeroCard'
import SectionTitle from '../components/SectionTitle'
import JobCard from '../components/JobCard'
import Button from '../components/Button'
import briefcase from '../components/Img/briefcase.png'
import { jobs } from '../data/jobs'

const filters = ['Departments', 'Experience', 'Job Type', 'Workplace Type']

const Careers = () => {
  return (
    <main>
      <HeroCard image={briefcase} imageAlt="Briefcase" imageClassName="lg:top-[51px] lg:left-[852px] lg:w-[265px]">
        <h1 className="text-[32px] leading-[44px] font-semibold md:text-[40px] md:leading-[48px]">
          Build the Future with Us
        </h1>
        <p className="mt-6 max-w-[560px] text-base leading-6 text-[#e8e8e8]">
          We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve
          meaningful problems.
        </p>
        <Button className="mt-[50px] h-[42px] w-[188px] text-sm font-semibold">Explore Open Positions</Button>
      </HeroCard>

      <section className="mt-[74px] rounded-[20px] bg-[#0b0b0b] py-[50px]">
        <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,220px)_1fr]">
          {filters.map((f) => (
            <div
              key={f}
              className="flex h-14 items-center justify-between rounded-full bg-card-2 px-5 text-base text-[#d0d0d0]"
            >
              {f}
              <IoMdArrowDropdown className="text-2xl text-white" />
            </div>
          ))}
          <div className="flex h-14 items-center rounded-full bg-[#0f0f0f] pr-[10px] pl-5 sm:col-span-2 lg:col-span-1">
            <input
              type="text"
              placeholder="Search by keywords..."
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-[#6b6b6b]"
            />
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-lg text-white">
              <FiSearch />
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 pt-[78px]">
        <SectionTitle title="Open Positions" />
        <div className="mx-auto mt-[54px] grid max-w-[1266px] grid-cols-1 gap-5 lg:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </section>

      <section className="px-4 pt-[160px] pb-[165px]">
        <div className="relative mx-auto max-w-[1098px] overflow-hidden rounded-[48px] bg-[#070707] shadow-[0_6px_14px_rgba(255,255,255,0.18)]">
          <div className="absolute inset-0 bg-[linear-gradient(#1f2330_1px,transparent_1px),linear-gradient(90deg,#1f2330_1px,transparent_1px)] bg-size-[53px_53px]" />
          <div className="absolute inset-0 bg-linear-to-b from-[#0f1a3a]/70 via-transparent to-transparent" />
          <div className="relative flex flex-col items-center px-6 py-[60px] text-center">
            <h2 className="text-[32px] leading-10 font-semibold md:text-[40px]">READY TO DISCUSS</h2>
            <p className="mt-[34px] text-xl font-medium">
              Your Product Needs With <span className="font-bold text-accent">Catalyst Analytic</span> Experts?
            </p>
            <Button to="/contact" className="mt-[30px] h-[42px] w-[198px] text-sm font-semibold">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Careers
