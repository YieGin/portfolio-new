import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <HeroSection />
      <Projects />
    </div>
  )
}

export default page
