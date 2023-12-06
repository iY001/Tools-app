import React from 'react'
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TodoLabel(props) {
  return (
    <>
    <div className='flex w-full justify-between'>
        <h1 className={`font-bold text-2xl text-blue-800 ${props.todo.completed ? 'line-through' : null}`}>{props.todo.todoText}</h1>
        <div>
            <button
            onClick={props.toggleComplete}
            className='bg-green-700 hover:bg-green-600 duration-300 shadow-xl text-lg py-3 px-3 mx-2'><FaCheck color='white'/></button>
            <button 
            onClick={props.deleteTodo}
            className='bg-red-700 hover:bg-red-600 duration-300 shadow-xl text-lg py-3 px-3 mx-2'><MdDelete color='white'/></button>
        </div>
    </div>
    </>
  )
}

export default TodoLabel