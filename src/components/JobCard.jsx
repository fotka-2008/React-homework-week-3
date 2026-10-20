import React from 'react'
import Button from './Button'

const Chip = ({ label, value }) => (
  <span className="inline-flex h-[47px] items-center gap-2 rounded-full bg-chip px-4 text-lg">
    <span className="text-[#a0a0a0]">{label}</span>
    <span className="size-1 rounded-full bg-accent" />
    <span>{value}</span>
  </span>
)

const JobCard = ({ icon: Icon, title, salary, experience, deadline, skills }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-card-2 p-6 font-roboto md:p-[50px]">
      <div className="flex items-center gap-[14px]">
        <span className="flex size-[74px] shrink-0 items-center justify-center rounded-lg border border-[#2f2f2f] bg-[#1c1c1c] text-[30px] text-accent">
          <Icon />
        </span>
        <h3 className="text-2xl md:text-[30px] xl:whitespace-nowrap xl:tracking-[-0.3px]">{title}</h3>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        <Chip label="Salary" value={salary} />
      </div>
      <div className="mt-5 flex flex-wrap gap-5">
        <Chip label="Experience" value={experience} />
        <Chip label="Deadline" value={deadline} />
      </div>

      <h4 className="mt-[50px] text-2xl">SKILLS</h4>
      <p className="mt-3 text-lg leading-[27px] text-[#a0a0a0]">{skills}</p>

      <Button to="/career-details" className="mt-[42px] h-[63px] w-full text-lg">
        Apply Now
      </Button>
    </div>
  )
}

export default JobCard
