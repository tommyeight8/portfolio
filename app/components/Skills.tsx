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
          delay: .6
        }
      }}
      viewport={{
        once: true
      }}
      className='w-full py-24 flex flex-col max-w-[900px] items-center justify-center text-white text-center 
      font-bold' id='skills'>
        <h2 className='text-3xl font-medium capitalize mb-16'>My Skills</h2>
        <div className='px-8 grid md:grid-cols-2 gap-4 w-full'>
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