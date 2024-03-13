'use client'

import { motion } from 'framer-motion'
import { dropIn } from '@/lib/motion'
import Backdrop from './Backdrop'

import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import { Project } from '@/lib/types'

type Props = {
    handleClose: () => void;
    project: Project
}

const Modal = ({ handleClose, project }: Props) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            // className='md:max-w-[800px] h-full md:h-2/3 bg-white z-50 mx-auto rounded-md'
            className='bg-white w-[90%] md:h-2/3 md:w-2/3 rounded-md p-2 relative'
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div 
                onClick={handleClose}
                className='text-gray-500 absolute hover:text-gray-600 right-2 cursor-pointer
                transition duration-200 text-2xl'
            >
                X
            </div>
            <div className='flex flex-col items-center justify-center mt-12'>
                <p className='mb-4 text-center text-2xl font-extralight text-gray-600'>{project.title}</p>
                <div className='w-[90%] md:w-[500px] 
                relative h-96 object-contain'>
                    <Image 
                        src={urlFor(project.image.asset._ref).url()}
                        alt={project._id}
                        fill={true}
                        className='object-contain'
                    />
                </div>
            </div>

        </motion.div>
    </Backdrop>
  )
}

export default Modal