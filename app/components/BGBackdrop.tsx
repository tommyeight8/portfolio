import React from 'react'
import styles from '@/styles/orbs.module.css'

const BGBackdrop = () => {
  return (
    <div className='absolute top-0 left-0 flex itemcn justify-center h-screen w-full 
        -z-10 overflow-hidden bg-[#07101f]'>
       <div className={`${styles.bubbles} relative flex w-full max-w-[900px]`}>
            <span style={{['--i' as string]: 11}}></span>
            <span style={{['--i' as string]: 12}}></span>
            <span style={{['--i' as string]: 24}}></span>
            <span style={{['--i' as string]: 10}}></span>
            <span style={{['--i' as string]: 14}}></span>
            <span style={{['--i' as string]: 23}}></span>
            <span style={{['--i' as string]: 18}}></span>
            <span style={{['--i' as string]: 16}}></span>
            <span style={{['--i' as string]: 19}}></span>
            <span style={{['--i' as string]: 20}}></span>
            <span style={{['--i' as string]: 25}}></span>
            <span style={{['--i' as string]: 18}}></span>
            <span style={{['--i' as string]: 21}}></span>
            <span style={{['--i' as string]: 13}}></span>
            <span style={{['--i' as string]: 15}}></span>
            <span style={{['--i' as string]: 26}}></span>
            <span style={{['--i' as string]: 17}}></span>
            <span style={{['--i' as string]: 13}}></span>
            <span style={{['--i' as string]: 28}}></span>
            <span style={{['--i' as string]: 18}}></span>
            <span style={{['--i' as string]: 16}}></span>
       </div>
    </div>
  )
}

export default BGBackdrop
