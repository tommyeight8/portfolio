'use client'

import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import React, { useState } from 'react'
import project from '@/schemas/project'
import Link from 'next/link'
import { Project } from '@/lib/types'
import Modal from './Modal'

type Props = {
  project: Project
}

const Project = ({ project }: Props) => {
  const [modal, setmodal] = useState(false);

  const handleModal = () => {
    setmodal(v => !v)
  }

  return (
    <div
    className='relative w-44 h-44 md:w-56 md:h-56 rounded-md object-cover 
    cursor-pointer transition duration-200'>
       {/* <Link href={`/projects/${project._id}`}> */}
       {modal && <Modal handleClose={handleModal} project={project} />}
        <Image 
          onClick={handleModal}
                className='object-cover rounded-md md:object-left lg:object-center hover:opacity-50
                transition duration-200' 
                src={urlFor(project.image.asset._ref).url()}
                alt={project.title}
                fill
            />
       {/* </Link> */}
    </div>
  )
}

export default Project
