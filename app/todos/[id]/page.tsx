
'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const page = async () => {
    const param = useParams()

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${param.id}`)
  
    const todo = await res.json()

  return (
    <div>
      <p>title: {todo.title}</p>
    </div>
  )
}

export default page
