'use client'

import { links } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import { useActiveSelection } from '@/context/ActiveContext'

import clsx from 'clsx'

type Props = {}

const Header = (props: Props) => {
    const {activeSelection, setActiveSelection} = useActiveSelection()

  return (
    <header className='z-50'>
        <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full'>
            <motion.div 
                initial={{
                    y: -100, x: '-50%', opacity: 0
                }}
                animate={{
                    y: 0, x: '-50%', opacity: 1
                }}
                className='absolute w-full max-w-[640px] bg-gray-800/20
                   after:w-full after:h-full after:bg-transparent after:absolute
                   after:rounded-full after:backdrop-blur-lg after:border-b-[1px] after:border-gray-600/20
                   after:left-1/2 after:top-1/2 border-[4px] border-transparent shadow-md shadow-gray-900/0
                   after:-translate-y-1/2 after:-translate-x-1/2 h-12 rounded-full mt-4'>
                        &nbsp;
            </motion.div>

            <nav className='fixed top-4 left-1/2 h-12 -translate-x-1/2 backdrop-blur-none'>
                <ul className='flex w-[24rem] items-center justify-center
                 text-slate-500 gap-4'>
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
                                                            className='absolute border-b-2 border-[#e6ffff]/90 w-full
                                                            h-full -z-10 shadow-md shadow-cyan-400/50
                                                            bg-gradient-to-t from-cyan-500/40 to-transparent'>
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

export default Header