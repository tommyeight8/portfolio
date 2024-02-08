'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Intro = () => {
    const [text] = useTypewriter({
        words: ['Graphic Designer', 
        'web developer', 'creater'],
        loop: true
    })

    const {activeSelection, setActiveSelection} = useActiveSelection()

  return (
    <section className='h-screen text-white text-center font-bold 
    flex flex-col w-full items-center justify-center gap-4' id='home'>
      <div className='uppercase font-bold text-3xl'>
        Tommy vong&nbsp;
        <span className='text-[#ff2d75]'>
            {text}<Cursor/></span>
      </div>
      <div className='w-full max-w-[600px] font-light'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum enim minima quasi. Suscipit reprehenderit tenetur repellat aut consectetur
        corrupti dolores dolorum iste.
      </div>
      <div className='flex gap-2'>
        <button className='px-6 py-2 border border-white rounded-md
        hover:bg-white hover:text-gray-900 transition duration-300'>Projects</button>
        <button className='px-6 py-2 bg-cyan-400 rounded-md text-gray-950
        hover:bg-[#ff2d75] transition duration-300'>Contact</button>
      </div>
    </section>
  )
}

export default Intro
