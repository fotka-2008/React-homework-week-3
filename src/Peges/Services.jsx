import React from 'react'
import HeroCard from '../components/HeroCard'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import gears from '../components/Img/gears.png'
import mlSolutions from '../components/Img/ml-solutions.png'
import blockchain from '../components/Img/blockchain.png'
import algoTrading from '../components/Img/algo-trading.png'
import dataEngineering from '../components/Img/data-engineering-2.png'
import predictiveAnalytics from '../components/Img/predictive-analytics-2.png'
import mlops from '../components/Img/mlops.png'

const services = [
  {
    image: mlSolutions,
    title: 'Machine Learning Solutions',
    text: 'Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.',
    items: [
      'Deep learning model development',
      'Neural network architecture design',
      'Computer vision solutions',
      'Natural language processing',
      'Model optimization and scaling',
    ],
    highlighted: true,
  },
  {
    image: blockchain,
    title: 'Blockchain Development',
    text: 'End-to-end blockchain solutions from smart contract development to decentralized application architecture.',
    items: [
      'Smart contract development',
      'DeFi protocol design',
      'Blockchain integration',
      'Web3 development',
      'Token implementation',
    ],
    arrowRight: true,
  },
  {
    image: algoTrading,
    title: 'Algorithmic Trading',
    text: 'Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.',
    items: [
      'Trading strategy development',
      'High-frequency trading systems',
      'Market analysis algorithms',
      'Risk management systems',
      'Performance optimization',
    ],
  },
  {
    image: dataEngineering,
    title: 'Data Engineering',
    text: 'Build robust data infrastructure that scales with your business needs using modern data engineering practices.',
    items: [
      'Data pipeline development',
      'Big data processing',
      'Database optimization',
      'ETL workflow design',
      'Data warehouse architecture',
    ],
  },
  {
    image: predictiveAnalytics,
    title: 'Predictive Analytics',
    text: 'Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.',
    items: [
      'Time series analysis',
      'Predictive modeling',
      'Business intelligence',
      'Statistical analysis',
      'Data visualization',
    ],
  },
  {
    image: mlops,
    title: 'MLOps & Infrastructure',
    text: 'Enterprise-grade infrastructure for deploying and managing ML models in production environments.',
    items: [
      'CI/CD pipeline setup',
      'Model deployment automation',
      'Performance monitoring',
      'Infrastructure scaling',
      'DevOps integration',
    ],
  },
]

const Services = () => {
  return (
    <main>
      <HeroCard image={gears} imageAlt="Gears" imageClassName="lg:top-0 lg:right-0 lg:w-[502px]">
        <h1 className="text-[32px] leading-[44px] font-semibold md:text-[40px] md:leading-[48px]">
          Our Comprehensive <span className="font-bold text-accent">Digital Solutions</span>
        </h1>
        <p className="mt-[50px] max-w-[630px] text-base leading-6 text-[#e8e8e8]">
          At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your
          business to new heights in the digital realm. With a team of skilled professionals, cutting-edge
          technologies, and a passion for innovation, we are committed to delivering exceptional results for
          every project we undertake. From captivating web design that leaves a lasting impression to seamless
          web development that ensures optimal functionality, we cover every aspect of your online presence.
        </p>
      </HeroCard>

      <section className="px-4 pt-[130px] pb-[98px]">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering"
        />

        <div className="mx-auto mt-[60px] grid max-w-[1230px] grid-cols-1 gap-[58px] lg:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services
