'use client'

import { motion } from 'framer-motion'

type Props = {
    onClick: () => void;
    children: React.ReactNode
}

const Backdrop = ({ children, onClick }: Props) => {
  return (
    <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        className='bg-[#131313ee] h-screen w-full fixed top-0 left-0 z-20
        flex items-center justify-center'
        onClick={onClick}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop