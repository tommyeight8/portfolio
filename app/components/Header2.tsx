'use client'

import { links } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import { useActiveSelection } from '@/context/ActiveContext'

import clsx from 'clsx'

type Props = {}

const Header2 = (props: Props) => {
    const {activeSelection, setActiveSelection} = useActiveSelection()

  return (
    <header className=''>
        <motion.div className='fixed top-0 w-full text-sm z-50'>
            <motion.div 
                initial={{
                    y: -100, opacity: 0
                }}
                animate={{
                    y: 0, opacity: 1
                }}
                className='absolute w-full h-14 bg-transparent before:absolute before:w-full 
                before:h-[90%] shadow-lg before:bg-gray-600/10 before:backdrop-blur-md 
                before:-z-10'>

                </motion.div>

                <nav className='flex justify-center items-center w-full'>
                    
                    <ul className='flex w-fit text-gray-500'>
                        {
                        links.map(link => {
                            return (
                                <motion.li
                                    initial={{
                                        y: -100, opacity: 0
                                    }}
                                    animate={{
                                        y: 0, opacity: 1
                                    }}
                                        key={link.name} 
                                        className='flex h-12 items-center justify-center relative'>
                                            <Link 
                                                onClick={() => setActiveSelection(link.name)}
                                                href={link.hash}
                                                className={clsx(`flex w-full items-center justify-center py-4 px-2 
                                                hover:text-gray-50 transition duration-300`, 
                                                {
                                                    'text-gray-50': activeSelection === link.name
                                                })}>
                                                    {link.name}

                                                {
                                                    link.name === activeSelection && (
                                                        <motion.span 
                                                            layoutId='activeSelection'
                                                            transition={{
                                                                type: 'tween',
                                                                stiff: '200'
                                                            }}
                                                            className='absolute bottom-2 h-[3px] rounded-full bg-white w-[70%]'>
                                                                &nbsp;
                                                        </motion.span>
                                                    )
                                                }     
                                            </Link>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </nav>
        </motion.div>
    </header>
  )
}

export default Header2