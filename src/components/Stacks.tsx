'use client'
import { ZapIcon } from 'lucide-react'
import * as React from 'react'

const Stacks = () => {
  return (
    <div className='flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
    </div>
  )
}

export default Stacks
