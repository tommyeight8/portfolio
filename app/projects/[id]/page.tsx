'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = async ({ params }: Props) => {
    const {activeSelection, setActiveSelection} = useActiveSelection() 

    const project = await client.fetch(groq`
    *[_type == "project" && _id == "${params.id}"][0]
`)

  console.log(project)

  return (
    <div className='flex flex-col justify-center items-center 
    h-screen'>
        <h1 className='font-normal text-gray-400 mb-8 text-2xl'>{project.title}</h1>
      <div className=''>
      <Image
        quality={90}
        src={urlFor(project.image.asset._ref).url()}
        width={500}
      height={500}
        alt={project._id}
      />
      <div className='mt-8'>
          <Link
          onClick={() => setActiveSelection('Projects')}
            className='cursor-pointer underline-offset-2 text-center text-cyan-400
            hover:text-cyan-300 font-light transition duration-200 flex justify-center group gap-2'
            href='/projects'
          >
            <span className='group-hover:mr-[2px]'>&larr;</span> 
            <span className='group-hover:ml-[2px]'>Go Back</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
