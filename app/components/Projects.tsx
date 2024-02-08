'use client'

import { useActiveSelection } from '@/context/ActiveContext';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const {activeSelection, setActiveSelection} = useActiveSelection()
  
  return (
    <section 
      className='h-screen w-full max-w-[960px] flex flex-col items-center justify-center text-white text-center 
      font-bold border-t border-gray-200/10' id='projects'>
        <h2 className='text-3xl font-medium capitalize'>Projects</h2>
        <p className='max-w-[460px] text-md font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
          recusandae saepe, error omnis tenetur ex laboriosam laudantium quos 
          soluta blanditiis, debitis possimus necessitatibus quae veniam 
          cupiditate et voluptatibus similique obcaecati.
        </p>
        <p className='max-w-[460px] text-md font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
          recusandae saepe, error omnis tenetur ex laboriosam laudantium quos 
          soluta blanditiis, debitis possimus necessitatibus quae veniam 
          cupiditate et voluptatibus similique obcaecati.
        </p>
    </section>
  ) 
}

export default Projects