'use client'

import { sendEmail } from '@/lib/actions';
import { EmailSchema } from '@/lib/types';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Form = () => {
    const [clientErrors, setclientErrors] = useState<any | null>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const clientAction = async (formData: FormData) => {
        const senderEmail = formData.get('email')
        const message = formData.get('message')

        const result = EmailSchema.safeParse({
            senderEmail,
            message
        })
        
        if(!result.success) {
            let zodErrors = {}
            
            result.error.issues.forEach(issue => {
                zodErrors = { ...zodErrors, [issue.path[0]]: issue.message}
            })

            setclientErrors(zodErrors)

            return 
        }
        
        formRef.current?.reset()

        const response = await sendEmail(formData)

        if(response?.error) {
            setclientErrors(response.error)
        } else {
            // success
            setclientErrors('')
        }
    }

  return (
    <>
        <form 
            action={clientAction}
            ref={formRef}
            className="flex flex-col text-sm items-center justify-center">
            <div className="w-full flex flex-col gap-4 p-2">
                <div className="relative">
                    <div className="relative">
                        <input  
                            name="email"
                            type="email" 
                            id='email'
                            className="text-white peer w-full border-b-2 border-transparent placeholder:text-transparent 
                            outline-none focus:border-gray-700 bg-black/10 p-2" 
                            placeholder="name" />
                        {
                            clientErrors?.senderEmail && (<p className='text-[#ff2770]'>{clientErrors.senderEmail}</p>)
                        }
                        <label htmlFor="email" className="absolute top-1 left-0 ml-1 -translate-y-6 px-1 text-xs 
                        duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm
                        peer-placeholder-shown:text-gray-400 peer-focus:ml-1 peer-focus:-translate-y-6 
                        peer-focus:px-1 peer-focus:text-xs peer-focus:text-gray-400 text-gray-400">Email</label>
                    </div>
                    <div className="relative mt-6">
                        <textarea 
                            id='message'
                            name="message"
                            maxLength={500}
                            className="text-white h-24 peer w-full border-b-2 border-transparent placeholder:text-transparent 
                                outline-none focus:border-gray-700 bg-black/10 p-2" 
                            placeholder="Message" />
                        {
                            clientErrors?.message && (<p className='text-[#ff2770]'>{clientErrors.message}</p>)
                        }
                        <label htmlFor="message" 
                            className="absolute top-1 left-0 ml-1 -translate-y-6 px-1 text-xs 
                            duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm
                            peer-placeholder-shown:text-gray-400 peer-focus:ml-1 peer-focus:-translate-y-6
                            peer-focus:px-1 peer-focus:text-xs peer-focus:text-gray-400 text-gray-400">
                                Message
                            </label>
                    </div>
                </div>

                <button 
                className="w-full text-gray-100 text-lg rounded-md relative
                bg-cyan-500 hover:bg-cyan-400 transition duration-400
                p-2 outline-none">
                    Submit
                </button>
            </div>

            <div className="flex gap-2 mt-4">
                    <Link href='#'>
                    <FaInstagram className="social-icons" />
                    </Link>
                    <Link href='#'>
                    <FaLinkedin className="social-icons" />
                    </Link>
                    <Link href='#'>
                    <FaTwitter className="social-icons" />
                    </Link>
            </div>
        </form>
    </>
  )
}

export default Form


// before:h-full before:w-full before:absolute 
//                 before:bg-cyan-400 hover:before:blur-sm before:rounded-md 
//                 before:inset-0 before:-z-10 before:transition before:duration-200