'use client'

import styles from '@/styles/contact.module.css'
import { useActiveSelection } from "@/context/ActiveContext"
import Form from './Form'

// after:bg-[url('/bg.jpg')] after:bg-cover after:bg-center after:bg-fixed 

const Contact = () => {
    
  return (
    <section 
        className='pt-24 pb-48 flex items-center justify-center  w-full relative bg-gradient-to-tr from-slate-800
         to-[#07101f] to-50%' 
        id='contact'>
        <div className={`${styles['bg-gradient']} relative w-[300px] h-[400px] flex justify-center items-center
            bg-transparent shadow-xl shadow-black/30 rounded-xl before:absolute before:w-full before:h-full
            overflow-hidden after:absolute after:bg-[#161e2b]
            after:inset-[2px] after:rounded-xl`}>
            <div className="z-20 w-full p-4">
                <h2 className="text-lg uppercase mb-6 text-center text-gray-100">Contact Me</h2>
                
                <Form />
            </div>
        </div>
    </section>
  )
}

export default Contact