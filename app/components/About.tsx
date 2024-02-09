'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import Image from 'next/image'
import Link from 'next/link'

import { motion, useInView } from 'framer-motion'

import styles from '@/styles/aboutme.module.css'

const About = () => {
  const {activeSelection, setActiveSelection} = useActiveSelection()
  return (
    <section 
      className='py-36 w-full max-w-[960px] flex flex-col justify-center items-center text-white
      font-bold' id='about'>
        <div className='flex gap-12'>
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
          className='flex flex-col gap-4 max-w-[400px]'>
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
            className='px-6 py-2 border border-cyan-400 rounded-md text-sm
            hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 transition duration-300
              w-fit'>
              Let's Get Touch
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
          >
            <div className='flex justify-center items-center relative '>
              <Image 
                className={`${styles.profile} absolute z-10 rounded-full bg-white w-[282px] h-[282px] object-cover`}
                src='/profile.png'
                quality={80}
                width={295}
                height={295} 
                alt='' />
              <div className={`${styles['profile']} relative w-[300px] h-[300px] rounded-full flex justify-center items-center
                bg-transparentbefore:absolute before:w-[500px] before:h-[350px]
                overflow-hidden after:absolute after:bg-[#07101f]
                after:inset-[3px] after:rounded-full`}>
              </div>
            </div>
            {/* <Image 
              className={`${styles.profile} relative rounded-full bg-white w-[300px] h-[300px] object-cover`}
              src='/profile.png'
              quality={80}
              width={300}
              height={300} 
              alt='' /> */}
          </motion.div>
        </div>
    </section>
  ) 
}

export default About
