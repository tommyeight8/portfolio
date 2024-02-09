'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

// const staggerAnimation = {
//   initial: {
//     opacity: 0,
//     y: 10
//   },
//   animate: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: .2 * i,
//     }
//   })
// }

const Intro = () => {
    const [text] = useTypewriter({
        words: ['Graphic Designer', 
        'web developer', 'creater'],
        loop: true
    })

    const btns = ['Projects', 'Contact Me']

  return (
    <section className='h-screen text-white text-center font-bold 
    flex flex-col w-full items-center justify-center gap-4' id='home'>
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: .5
          }
        }}
      >
        <div className='uppercase font-bold text-3xl'>
          Tommy vong&nbsp;
          <span className='text-[#ff2d75]'>
              {text}<Cursor/></span>
        </div>
        <div className='w-full max-w-[600px] font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum enim minima quasi. Suscipit reprehenderit tenetur repellat aut consectetur
          corrupti dolores dolorum iste.
        </div>
      </motion.div>
      <motion.div 
        initial={{
            y: 100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: .3,
              delay: .2
            }
          }}
        className='flex gap-2'>
        <button
          className='px-6 py-2 border border-white rounded-md
          hover:bg-white hover:text-gray-900 transition duration-300'>
            Projects
        </button>
        <button 
          className='px-6 py-2 bg-cyan-400 rounded-md text-gray-950
          hover:bg-[#ff2d75] transition duration-300'>
            Contact
          </button>
      </motion.div>
    </section>
  )
}

export default Intro
