'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaDownload, FaEnvelope } from 'react-icons/fa'

const Intro = () => {
    const [text] = useTypewriter({
        words: ['Graphic Designer', 
        'web developer', 'creater'],
        loop: true
    })

  return (
    <motion.section 
    className='h-screen text-white text-center font-bold 
    flex flex-col w-full items-center justify-center gap-4' id='home'>
      <motion.div 
        initial={{
          x: -100,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          delay: .1,
          duration: .2
        }}
        className='uppercase font-bold text-lg md:text-3xl'>
          Tommy vong&nbsp;
          <span className='text-[#ff2d75]'>
              {text}<Cursor/>
          </span>
      </motion.div>
      <motion.div 
        initial={{
          x: 100,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          delay: .1,
          duration: .2
        }}
        className='w-full max-w-[400px] md:max-w-[600px] font-light'>
          Graphic designer with a passion for creating innovative and trending designs. Skilful in print and digital media, as well as a great depth of knowledge in web development.
      </motion.div>
      <motion.div 
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: .3
        }}
        className='flex gap-2 text-normal'>
          <Link 
          download
          href='./Resume2024.pdf'
          className='px-4 text-sm md:text-lg md:px-6 py-2 border border-white rounded-md
          hover:bg-white hover:text-gray-900 transition duration-300
          flex gap-2 items-center'>
            <FaDownload /> Resume
          </Link>
          <Link href='#contact'>
            <button className='px-4 text-sm md:text-lg md:px-6 py-2 border-2 border-cyan-400 bg-cyan-400 rounded-md text-gray-950
            hover:bg-[#ff2d75] hover:border-[#ff2d75] transition duration-300 flex gap-2 items-center'>
              <FaEnvelope /> Contact
            </button>
          </Link>
      </motion.div>
    </motion.section>
  )
}

export default Intro
