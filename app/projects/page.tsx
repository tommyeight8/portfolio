import { client } from '@/lib/sanity.client'
import React from 'react'
import Project from '../components/Project'
import Link from 'next/link'
import { Project as ProjectType } from '@/lib/types'

const page = async () => {
    const projects = await client.fetch(`
        *[_type == 'project']
    `)

  return (
    <section 
      className='py-12 w-full max-w-[960px] flex flex-col items-center justify-center text-white text-center 
      font-bold' id='projects'>
        <h2 className='text-3xl font-medium capitalize mb-16'>Projects</h2>
        
        <div className='grid grid-cols grid-cols-2 lg:grid-cols-4 gap-4'>
          {projects.map((project: ProjectType) => (
            <Project key={project._id} project={project}/>
          ))}
        </div>
    </section>
  )
}

export default page
