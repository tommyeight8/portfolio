import React from 'react'

import styles from '@/styles/stars.module.css'

const ShootingStars = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-screen -z-10'>
        <div className={`${styles['bg-stars']} w-full h-screen absolute inset-0 overflow-hidden 
        bg-gradient-to-tr from-slate-800 from-10% via-slate-900 via-30% to-black to-90%`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default ShootingStars