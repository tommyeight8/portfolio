import Link from 'next/link'
import React from 'react'

type Todo = {
    userId: number,
    id: number,
    title:string,
    completed: boolean
}

const Todolist = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  
    const todos = await res.json()

  return (
    <ul>
        {
            todos.map((todo: Todo) => (
                <Link href={`/todos/${todo.id}`}>
                    <li>{todo.id}</li>
                </Link>
            ))
        }
    </ul>
  )
}

export default Todolist
