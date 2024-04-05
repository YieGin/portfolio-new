import About from '@/components/About'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='pb-20'>
      <HeroSection />
      <Projects />
      <About />
    </div>
  )
}

export default page
