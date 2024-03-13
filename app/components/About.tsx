'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import Image from 'next/image'
import Link from 'next/link'

import { motion, useInView } from 'framer-motion'

import styles from '@/styles/aboutme.module.css'
import { FaBriefcase } from 'react-icons/fa'

const About = () => {
  const {activeSelection, setActiveSelection} = useActiveSelection()
  return (
    <section 
      className='px-8 md:px-0 pb-24 md:py-36 w-full max-w-[960px] flex flex-col justify-center items-center text-white
      font-bold' id='about'>
        <div className='flex flex-col md:flex-row gap-12'>
          <motion.div 
          initial={{
            x: -100,
            opacity: 0
          }}
          whileInView={{
            x: 1,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 180,
              duration: .4
            }
          }}
          viewport={{
            once: true
          }}
          className='flex flex-col gap-4 max-w-[400px] order-2 md:order-1'>
            <h2 className='text-3xl font-medium'>So, who am I?</h2>
            <p className='text-gray-300 text-md font-light'>
              I am a versatile creative professional with a strong background in graphic design and extensive experience 
              in web development. With a keen eye for aesthetics and a solid understanding of coding languages such 
              as ReactJS and NodeJS, I bring a unique blend of design expertise 
              and technical proficiency to every project.
            </p>
            <Link 
            onClick={() => setActiveSelection('Projects')}
            href='/projects'
            >
              <button className='px-6 py-2 border-2 border-cyan-400 bg-cyan-400 rounded-md text-gray-950
            hover:bg-[#ff2d75] hover:border-[#ff2d75] transition duration-300 flex gap-2 items-center'>
              <FaBriefcase /> Projects
            </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0
            }}
            whileInView={{
              x: 1,
              opacity: 1,
              transition: {
                type: "spring",
                damping: 15,
                stiffness: 180,
                duration: .3
              }
            }}
            viewport={{
            once: true
          }}
          className='order-1 md:order-2'
          >
          <div className='flex justify-center items-center relative '>
              <Image 
                className={`${styles.profile} absolute z-10 rounded-full bg-white w-[200px] h-[200px] md:w-[265px] md:h-[265px] object-cover`}
                src='/profile.png'
                quality={80}
                width={295}
                height={295} 
                alt='' />
              <div className={`${styles['profile']} relative w-[230px] h-[230px] md:w-[300px] md:h-[300px] 
                rounded-full flex justify-center items-center
                bg-transparentbefore:absolute before:w-[500px] before:h-[350px]
                overflow-hidden after:absolute after:bg-[#07101f]
                after:inset-[5px] after:rounded-full`}>
              </div>
          </div>
          </motion.div>
        </div>
    </section>
  ) 
}

export default About