'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Progressbar from './Progressbar'
import { skillsData } from '@/lib/data'

const Skills = () => {
  const {activeSelection, setActiveSelection} = useActiveSelection()
  
  return (
    <motion.section 
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: .3
        }
      }}
      viewport={{
        once: true
      }}
      className='w-full py-24 max-w-[900px] flex flex-col items-center justify-center text-white text-center 
      font-bold border-t border-gray-200/10' id='skills'>
        <h2 className='text-3xl font-medium capitalize mb-16'>My Skills</h2>
        <div className='grid grid-cols-2 gap-4 w-full max-[960px]:'>
          {
            skillsData.sort((a, b) => {
              return b.knowledge - a.knowledge
            }).map((skill, i) => {
              return (<Progressbar key={i} value={skill.knowledge} lang={skill.lang}/>)
            })
          }
        </div>
    </motion.section>
  )
}

export default Skills
