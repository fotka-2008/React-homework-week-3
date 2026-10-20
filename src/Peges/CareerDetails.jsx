import React from 'react'
import { FiUpload } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import Button from '../components/Button'
import JobCard from '../components/JobCard'
import careerHero from '../components/Img/career-hero.png'
import listIcon from '../components/Img/list-icon.png'
import flagUs from '../components/Img/flag-us.png'
import captcha from '../components/Img/captcha.png'
import { jobs } from '../data/jobs'

const paragraphs = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
]

const responsibilities = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
]

const requirements = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
]

const fields = ['Email*', 'Headline (Optional)']

const job = jobs[0]

const inputCls =
  'h-[42px] w-full rounded-sm bg-field px-[14px] text-sm text-white outline-none placeholder:text-[#a0a0a0]'

const Heading = ({ children, className = '' }) => (
  <h2 className={`text-2xl font-medium uppercase ${className}`}>{children}</h2>
)

const Paragraphs = () => (
  <div className="mt-3 flex flex-col gap-6">
    {paragraphs.map((text, i) => (
      <p key={i} className="text-base leading-6 text-[#b0b0b0]">
        {text}
      </p>
    ))}
  </div>
)

const IconList = ({ items }) => (
  <ul className="mt-3 flex flex-col gap-3">
    {items.map((text, i) => (
      <li key={i} className="flex gap-[10px] text-base leading-6 text-[#b0b0b0]">
        <img src={listIcon} alt="" className="mt-1 size-[17px] shrink-0" />
        {text}
      </li>
    ))}
  </ul>
)

const Chip = ({ label, value }) => (
  <span className="inline-flex h-[41px] w-fit items-center gap-2 rounded-full bg-chip px-4 text-sm">
    <span className="text-[#a0a0a0]">{label}</span>
    <span className="size-1 rounded-full bg-accent" />
    <span>{value}</span>
  </span>
)

const CareerDetails = () => {
  return (
    <main>
      <section className="relative flex h-[342px] flex-col items-center justify-center overflow-hidden">
        <img src={careerHero} alt="" className="absolute inset-0 size-full object-cover blur-[1px]" />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="relative text-[44px] font-extrabold text-[#f8efe9] md:text-[64px]">WEB DESIGNER</h1>
        <Button to="/career-details" className="relative mt-5 h-[50px] w-[235px] font-roboto text-lg">
          Apply Now
        </Button>
      </section>

      <div className="mx-auto grid max-w-[1299px] grid-cols-1 gap-[33px] px-4 pt-[35px] lg:grid-cols-[834px_400px]">
        <div className="flex flex-col gap-[30px]">
          <article className="rounded-2xl bg-card-2 px-6 py-8 md:px-8">
            <Heading className="mt-1">About this position</Heading>
            <Paragraphs />

            <Heading className="mt-[38px]">Responsibilities</Heading>
            <IconList items={responsibilities} />

            <Heading className="mt-[38px]">Requirements</Heading>
            <IconList items={requirements} />

            <Heading className="mt-[38px]">Benefits</Heading>
            <Paragraphs />
          </article>

          <form className="rounded-2xl bg-card px-6 py-10 md:px-10">
            <h2 className="text-xl font-semibold">Apply Now</h2>
            <div className="mt-[34px] flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <input type="text" placeholder="First Name*" className={inputCls} />
                <input type="text" placeholder="Last Name*" className={inputCls} />
              </div>
              {fields.map((f) => (
                <input key={f} type="text" placeholder={f} className={inputCls} />
              ))}
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
                placeholder="Application Submission"
                className="h-[114px] w-full resize-none rounded-sm bg-field px-[14px] py-3 text-sm text-white outline-none placeholder:text-[#a0a0a0]"
              />
              <div className="flex h-20 flex-col items-center justify-center gap-2 rounded-md border border-dashed border-[#555] text-[13px] text-[#a0a0a0]">
                <FiUpload className="text-lg text-[#d0d0d0]" />
                <p>
                  Drag &amp; Drop File Here or <span className="text-accent underline">Browse File</span>
                </p>
              </div>
            </div>
            <img src={captcha} alt="Verify you are human" className="mt-10 w-[300px]" />
            <button type="button" className="mt-10 h-[50px] w-full rounded-lg bg-accent text-base font-semibold">
              Submit Application
            </button>
          </form>
        </div>

        <aside className="flex h-fit flex-col rounded-2xl bg-card-2 p-8 font-roboto">
          <h2 className="text-2xl">{job.title}</h2>
          <div className="mt-6 flex flex-col gap-5">
            <Chip label="Salary" value={job.salary} />
            <Chip label="Experience" value={job.experience} />
            <Chip label="Deadline" value={job.deadline} />
          </div>
          <h3 className="mt-[30px] text-lg">SKILLS</h3>
          <p className="mt-3 text-sm leading-[21px] text-[#a0a0a0]">{job.skills}</p>
          <Button to="/career-details" className="mt-6 h-[50px] w-full text-lg">
            Apply Now
          </Button>
        </aside>
      </div>

      <section className="mx-auto max-w-[1299px] px-4 pt-[100px] pb-[110px]">
        <h2 className="text-[32px] font-semibold md:text-4xl">Similar Positions</h2>
        <div className="mt-[52px] grid grid-cols-1 gap-5 lg:grid-cols-2">
          {jobs.map((j) => (
            <JobCard key={j.title} {...j} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default CareerDetails
