import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const now = new Date()
    
  return (
    <div className=' w-full text-xs text-gray-400 p-4
    flex items-center justify-center flex-col gap-2 mt-8'>
        <Image src='/logo.png' width={36} height={36} alt='logo'/>
        <p className='text-center'>Tommy Vong - {now.getFullYear().toString()}</p>
    </div>
  )
}

export default Footer