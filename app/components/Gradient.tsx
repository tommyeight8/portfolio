import React from 'react'
import styles from '@/styles/gradient.module.css'

const Gradient = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center bg-[#25252b]'>
        <div className={`${styles.box}`}>
            <div className={`${styles.login}`}>
                <div className={`${styles.loginBx}`}></div>
            </div>
        </div>
    </section>
  )
}

export default Gradient
