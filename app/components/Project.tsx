import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import React from 'react'
import project from '@/schemas/project'
import Link from 'next/link'

const Project = ({ project }) => {
  return (
    <div
    className='relative w-56 h-56 rounded-md object-cover 
    cursor-pointer transition duration-200'>
       <Link href={`/projects/${project._id}`}>
        <Image 
                className='object-cover rounded-md md:object-left lg:object-center hover:opacity-50
                transition duration-200' 
                src={urlFor(project.image.asset._ref).url()}
                alt={project.title}
                fill
            />
       </Link>
    </div>
  )
}

export default Project
