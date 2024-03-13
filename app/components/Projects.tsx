'use client'

import { useActiveSelection } from '@/context/ActiveContext';
import { client } from '@/lib/sanity.client';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import urlFor from '@/lib/urlFor'
import Project from './Project';
import Link from 'next/link';

const Projects = async () => {
  const {activeSelection, setActiveSelection} = useActiveSelection() 

  const projects = await client.fetch(`
        *[_type == 'project']
    `)

  return (
    <section 
      className='py-12 w-full max-w-[960px] flex flex-col items-center justify-center text-white text-center 
      font-bold' id='projects'>
        <h2 className='text-3xl font-medium capitalize mb-16'>Projects</h2>
        
        <div className='grid grid-cols grid-cols-2 lg:grid-cols-4 gap-4'>
          {projects.slice(0, 10).map(project => (
            <Project key={project._id} project={project}/>
          ))}
        </div>

        <div className='mt-8'>
          <Link
          onClick={() => setActiveSelection('Projects')}
            className='cursor-pointer underline-offset-2 text-center text-cyan-400
            hover:text-cyan-300 font-light transition duration-200 group'
            href='/projects'
          >
            <span className='group-hover:mr-[2px]'>See More</span> <span className='group-hover:ml-[2px]'>&#8594;</span>
          </Link>
        </div>
    </section>
  ) 
}

export default Projects