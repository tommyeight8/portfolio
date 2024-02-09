'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { once } from 'events'

const Skills = () => {
  const staggerMotion = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: .05 * i
      }
    })
  }

  return (
    <section 
      className='h-screen w-full max-w-[900px] flex flex-col items-center justify-center text-white text-center 
      font-bold border-t border-gray-200/10' id='skills'>
        <div className='max-w-[640px]'>
          <motion.h2 
            initial={{
              y: 100,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: .2
            }}
            whileInView='animate'
            className='text-3xl font-medium capitalize mb-12'>My SKills</motion.h2>
          <ul className='flex flex-wrap gap-2 justify-center items-center'>
            { skillsData.map((skill, i) => {
              return (
              <motion.li
              key={i}
              variants={staggerMotion}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true
              }}
              custom={i}
              className='text-gray-700 py-2 px-4 bg-gray-200 rounded-full'>
                {skill}
              </motion.li>)
            })}
          </ul>
        </div>
    </section>
  )
}

export default Skills
