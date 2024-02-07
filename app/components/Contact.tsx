'use client'

import ShootingStars from "./ShootingStars"
import Image from "next/image"

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

// after:bg-[url('/bg.jpg')] after:bg-cover after:bg-center after:bg-fixed 

const Contact = () => {
  return (
    // <section className="relative h-screen w-full bg-blue-950">
    //   <ShootingStars />
    // </section>
    <section className='flex items-center justify-center h-screen w-full relative' id='contact'>
        <div className={`relative w-[300px] h-[400px] flex justify-center items-center
            bg-transparent shadow-xl shadow-black/30 rounded-[20px] before:absolute before:w-[170px] before:h-[130%]
            overflow-hidden before:bg-gradient-to-t from-[#ff2d75] to to-[#4fc3dc]
            before:animate-[spin_15s_linear_infinite] after:absolute after:bg-slate-900
            after:inset-[5px] after:rounded-[20px]`}>
            <div className="z-20 w-full p-4">
                <h2 className="text-lg uppercase mb-4 text-center text-gray-100">Contact Me</h2>
                <form action="" className="flex flex-col text-sm items-center justify-center">
                    <div className="w-full flex flex-col gap-4 p-2">
                        <div className="relative">
                            <div className="relative">
                                <input type="email" className="text-white peer w-full border-b-2 border-transparent placeholder:text-transparent 
                                outline-none focus:border-gray-700 bg-black/10 p-2" placeholder="name" />
                                <label htmlFor="email" className="absolute top-1 left-0 ml-1 -translate-y-6 px-1 text-xs 
                                duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm
                                peer-placeholder-shown:text-gray-300 peer-focus:ml-1 peer-focus:-translate-y-6 
                                peer-focus:px-1 peer-focus:text-xs peer-focus:text-gray-400 text-gray-400">Email</label>
                            </div>
                            <div className="relative mt-6">
                                <textarea id='message' className="text-white h-24 peer w-full border-b-2 border-transparent placeholder:text-transparent 
                                outline-none focus:border-gray-700 bg-black/10 p-2" placeholder="Message" />
                                <label htmlFor="message" className="absolute top-1 left-0 ml-1 -translate-y-6 px-1 text-xs 
                                duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm
                                peer-placeholder-shown:text-gray-300 peer-focus:ml-1 peer-focus:-translate-y-6
                                peer-focus:px-1 peer-focus:text-xs peer-focus:text-gray-400 text-gray-400">Message</label>
                            </div>
                            {/* <input 
                                autoComplete="off"
                                type="text" 
                                id="email" 
                                placeholder="email"
                                className="border-b-2 border-transparent outline-none focus:outline-none focus:border-gray-200 bg-black/20 w-full
                                    tranistion-color duration-200 p-2 placeholder:text-transparent peer"/>
                            <label
                                htmlFor='email'
                                className="absolute top-2 left-2 text-gray-300 peer-placeholder-shown:translate-y-0 
                                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-translate-y-3
                                peer-focus:text-xs">
                                    Email
                            </label> */}
                        </div>
                        {/* <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-white/60 font-light">Email</label>
                            <input 
                            className="p-2 rounded-sm bg-gray-900/20 text-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                            name="email" type="text" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="text-white/60 font-light">Message</label>
                            <textarea 
                            className="p-2 h-24 rounded-sm bg-gray-900/20 outline-none no-scrollbar
                            focus:outline-none focus:ring-1 focus:ring-gray-300"
                            name="message" />
                        </div> */}
                        
                        <button 
                        className="w-full text-gray-100 text-lg rounded-md relative
                        bg-gradient-to-r from-pink-500 to-indigo-500 
                        hover:-translate-y-1 hover:hover:shadow-lg transition duration-400 p-2 outline-none">
                            Submit
                        </button>
                    </div>

                    <div className="flex gap-2 mt-4">
                          <FaInstagram className="text-gray-200 text-2xl" />
                          <FaLinkedin className="text-gray-200 text-2xl" />
                          <FaTwitter className="text-gray-200 text-2xl" />
                    </div>
                </form>
            </div>
            <div className="absolute bg-slate-300/10 backdrop-blur-sm z-10 inset-[5px] rounded-[17px]">

            </div>
        </div>
        <ShootingStars />
    </section>
  )
}

export default Contact