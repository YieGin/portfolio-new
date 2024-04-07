import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='pb-20'>
      <HeroSection />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}

export default page
