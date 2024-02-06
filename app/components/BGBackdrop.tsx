import React from 'react'
import styles from '@/styles/orbs.module.css'

const BGBackdrop = () => {
  return (
    <div className='absolute top-0 left-0 flex itemcn justify-center h-screen w-full 
        -z-10 overflow-hidden bg-[#07101f]'>
       <div className={`${styles.bubbles} relative flex w-full max-w-[900px]`}>
            <span style={{['--i' as any]: 11}}></span>
            <span style={{['--i' as any]: 12}}></span>
            <span style={{['--i' as any]: 24}}></span>
            <span style={{['--i' as any]: 10}}></span>
            <span style={{['--i' as any]: 14}}></span>
            <span style={{['--i' as any]: 23}}></span>
            <span style={{['--i' as any]: 18}}></span>
            <span style={{['--i' as any]: 16}}></span>
            <span style={{['--i' as any]: 19}}></span>
            <span style={{['--i' as any]: 20}}></span>
            <span style={{['--i' as any]: 25}}></span>
            <span style={{['--i' as any]: 18}}></span>
            <span style={{['--i' as any]: 21}}></span>
            <span style={{['--i' as any]: 13}}></span>
            <span style={{['--i' as any]: 15}}></span>
            <span style={{['--i' as any]: 26}}></span>
            <span style={{['--i' as any]: 17}}></span>
            <span style={{['--i' as any]: 13}}></span>
            <span style={{['--i' as any]: 28}}></span>
            <span style={{['--i' as any]: 18}}></span>
            <span style={{['--i' as any]: 16}}></span>
       </div>
    </div>
  )
}

export default BGBackdrop
