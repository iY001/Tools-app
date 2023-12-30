import React, { useState } from 'react';
import shortid from 'shortid';
import TodoLabel from './TodoLabel';
import { RxDotFilled } from 'react-icons/rx';

function ToDoList() {
  const [todos, setToDos] = useState([]);
  const [showTodo, setShowTodo] = useState('all');
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([
      {
        id: shortid.generate(),
        todoText: todo,
        completed: false,
      },
      ...todos,
    ]);
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (showTodo === 'notDone') {
      return !todo.completed;
    } else if (showTodo === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });


  return (
    <div className='container w-[50%] bg-gray-300 rounded-xl shadow-2xl text-center items-center p-8 mx-auto'>
      <h1 className='text-blue-800 font-bold text-4xl'>TO DO LIST</h1>

      <form className='mt-8' onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className='py-2 px-3 w-[60%] shadow-2xl rounded-sm text-base font-semibold'
          placeholder="What's Your Plan For Today ?"
          type='text'
        />
        <button
          type='submit'
          className='bg-blue-800 hover:bg-blue-600 duration-300 text-slate-100 hover:text-white shadow-2xl rounded-sm py-2 px-8  font-bold mx-4'
        >
          ADD
        </button>
      </form>

      <section className='w-full text-left mt-8'>
        {filteredTodos.map((todo) => (
          <div className='flex mx-6 my-4' key={todo.id}>
            <RxDotFilled
              className='text-xl mt-2 text-blue-800'
              onClick={() => toggleComplete(todo.id)}
            />
            <TodoLabel todo={todo} toggleComplete={() => { toggleComplete(todo.id) }} deleteTodo={() => handleDelete(todo.id)} />
          </div>
        ))}
      </section>

      <div className='mr-8 mt-8'>
        <button
          onClick={() => setShowTodo('all')}
          className='bg-blue-800 hover:bg-blue-600 duration-300 text-slate-100 hover:text-white shadow-2xl rounded-sm py-2 px-8  font-bold mx-4'
        >
          SHOW ALL
        </button>
        <button
          onClick={() => setShowTodo('notDone')}
          className='bg-blue-800 hover:bg-blue-600 duration-300 text-slate-100 hover:text-white shadow-2xl rounded-sm py-2 px-8  font-bold mx-4'
        >
          NOT DONE
        </button>
        <button
          onClick={() => setShowTodo('completed')}
          className='bg-blue-800 hover:bg-blue-600 duration-300 text-slate-100 hover:text-white shadow-2xl rounded-sm py-2 px-8  font-bold mx-4'
        >
          COMPLETED
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
