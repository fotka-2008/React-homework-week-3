import React from 'react'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import FaqItem from '../components/FaqItem'
import robot from '../components/Img/robot.png'
import avatars from '../components/Img/avatars.png'
import zapier from '../components/Img/zapier.png'
import spotify from '../components/Img/spotify.png'
import zoom from '../components/Img/zoom.png'
import slack from '../components/Img/slack.png'
import amazon from '../components/Img/amazon.png'
import adobe from '../components/Img/adobe.png'
import predictiveAnalytics from '../components/Img/predictive-analytics.png'
import aiConsulting from '../components/Img/ai-consulting.png'
import dataEngineering from '../components/Img/data-engineering.png'

const partners = [
  { src: zapier, alt: 'Zapier' },
  { src: spotify, alt: 'Spotify' },
  { src: zoom, alt: 'Zoom' },
  { src: slack, alt: 'Slack' },
  { src: amazon, alt: 'Amazon' },
  { src: adobe, alt: 'Adobe' },
]

const services = [
  {
    image: predictiveAnalytics,
    imageClassName: 'mt-[-14px]',
    title: 'Predictive Analytics',
    text: 'Forecast trends and make data-driven decisions with our advanced ML models.',
  },
  {
    image: aiConsulting,
    title: 'AI Consulting',
    text: 'Expert guidance on implementing AI solutions for your business needs.',
  },
  {
    image: dataEngineering,
    title: 'Data Engineering',
    text: 'Build robust data pipelines and infrastructure for ML operations.',
  },
]

const faqs = [
  {
    num: '01',
    question: 'What services does Catalyst Analytics provide?',
    answer:
      'Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
    open: true,
  },
  { num: '02', question: 'Lorem Ipsum is simply dummy text of the printing' },
  { num: '03', question: 'Lorem Ipsum is simply dummy text of the printing' },
  { num: '04', question: 'Lorem Ipsum is simply dummy text of the printing' },
  { num: '05', question: 'Lorem Ipsum is simply dummy text of the printing' },
]

const plusPattern =
  "bg-[url(data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2715%27%20height=%2715%27%3E%3Cpath%20d=%27M7.5%205v5M5%207.5h5%27%20stroke=%27%23444%27/%3E%3C/svg%3E)]"

const Home = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-[radial-gradient(circle,#5a5a5a_1px,transparent_1.5px)] bg-size-[58px_58px] bg-position-[-13px_-11px]">
        <div className="relative mx-auto max-w-[1290px] px-4 pt-16 pb-10 lg:h-[731px] lg:pt-[171px] lg:pb-0">
          <div className="relative z-10 lg:pl-3">
            <h1 className="text-[44px] leading-[60px] font-extrabold tracking-[-0.5px] md:text-[72px] md:leading-[88px]">
              Transforming Data
              <br />
              into{' '}
              <span className="ml-1 inline-block rounded-[14px] bg-accent px-[22px] leading-[60px] md:leading-[76px]">
                Decisions
              </span>
            </h1>
            <p className="mt-9 max-w-[500px] text-xl leading-8 text-[#d8d8d8]">
              Leverage the power of machine learning and AI to unlock insights and drive business growth
            </p>
            <Button className="mt-[34px] h-[42px] w-[165px] text-sm font-semibold">Book a Meeting</Button>
            <div className="mt-[30px] flex items-center gap-4">
              <img src={avatars} alt="Clients" className="h-[30px] w-[60px]" />
              <p className="text-sm text-[#d0d0d0]">
                Over <span className="font-semibold text-white">100+</span> clients have worked with us
              </p>
            </div>
          </div>

          <img
            src={robot}
            alt="AI robot"
            className="mx-auto mt-8 w-full max-w-[520px] lg:absolute lg:top-1 lg:left-[628px] lg:mt-0 lg:w-[720px] lg:max-w-none mask-l-from-60% mask-r-from-85% mask-y-from-85%"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1313px] px-4 lg:px-0">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 border-y border-partner-line py-14 lg:h-[171px] lg:justify-between lg:px-[45px] lg:py-0">
          {partners.map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} />
          ))}
        </div>
      </section>

      <section className="relative pt-[137px]">
        <span className={`absolute top-[180px] left-0 hidden h-[265px] w-[240px] lg:block ${plusPattern}`} />
        <span className={`absolute bottom-[-115px] right-0 hidden h-[265px] w-[265px] lg:block ${plusPattern}`} />

        <SectionTitle title="Our Ultimate Set of Services for Your Ideas Implementation" />

        <div className="relative mx-auto mt-[80px] grid max-w-[1259px] grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex h-[480px] flex-col items-center rounded-[32px] bg-card px-12 pt-[44px] text-center">
              <div className="flex h-[240px] items-center justify-center">
                <img src={s.image} alt={s.title} className={s.imageClassName} />
              </div>
              <h3 className="mt-7 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-6 text-base leading-6 text-[#e0e0e0]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pt-[180px] pb-[126px]">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="mx-auto mt-[78px] flex max-w-[798px] flex-col gap-6">
          {faqs.map((faq) => (
            <FaqItem key={faq.num} {...faq} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
