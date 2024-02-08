'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const {activeSelection, setActiveSelection} = useActiveSelection()

  return (
    <section 
      className='h-screen w-full max-w-[960px] flex flex-col justify-center items-center text-white
      font-bold border-t border-gray-200/10' id='about'>
        <div className='flex gap-12'>
          <div className='flex flex-col gap-4 max-w-[400px]'>
            <h2 className='text-3xl font-medium'>So, who am I?</h2>
            <p className='text-gray-300 text-md font-light'>
              I am a versatile creative professional with a strong background in graphic design and extensive experience 
              in web development. With a keen eye for aesthetics and a solid understanding of coding languages such 
              as ReactJS and NodeJS, I bring a unique blend of design expertise 
              and technical proficiency to every project.
            </p>
            <Link 
            onClick={() => setActiveSelection('Contact')}
            href='#contact'
            className='px-6 py-2 border border-white rounded-md text-sm
            hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 transition duration-300
              w-fit'>
              Let's Get Touch
            </Link>
          </div>
          <Image 
          className=''
          src='/profile.png'
          quality={80}
          width={400}
          height={300} 
          alt='' />
          
        </div>
    
    </section>
  ) 
}

export default About
