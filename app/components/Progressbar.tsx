'use client'

import { animate, motion } from 'framer-motion'
import styles from '@/styles/progressbar.module.css'
import { useEffect, useRef } from 'react'

type Props = {
  value: number,
  lang: string
}

const Progressbar = ({ value, lang }: Props) => {
  const progressRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if(progressRef.current !== null) {
      animate(0, value, {
        duration: 1.5,
        onUpdate: (currentValue) => {
          // @ts-ignore 
          progressRef.current.textContent = currentValue.toFixed(0)
        }
      })
    }
  }, [value])

  return (
    <div className='flex flex-col'>
      <p className='text-sm font-normal w-fit text-gray-300'>{lang}</p>
      <div className='flex items-center gap-2 text-white w-full'>
        <div className='w-full h-4 flex justify-start items-stretch
          rounded-full shadow-md shadow-gray-800/10 overflow-hidden bg-gray-700'>
          <motion.div 
            whileInView={{
              width: `${value}%`
            }}
            transition={{
              duration: 1.5
            }}
            viewport={{
              once: true
            }}
            className='w-[0%] bg-gradient-to-r from-indigo-500 to-[#ff2770] rounded-r-full'>
          </motion.div>
        </div>
        <div className='text-gray-300 flex font-normal'>
          <p ref={progressRef}>0</p><span>%</span>
        </div>
      </div>
    </div>
  )
}

export default Progressbar