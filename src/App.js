import React from 'react'
import TimerPage from './Pages/TimerPage'
import ToDoListPage from './Pages/ToDoListPage'

function App() {
  const MoveDown = ()=>{
    window.scrollTo(0 ,1011)
  }
  const MoveUp = ()=>{
    window.scrollTo(0 ,0)
  }
  return (
    <>
    <TimerPage/>
    <div className='h-[15vh] bg-gradient-to-b from-blue-950 to-blue-800 py-8 flex justify-center w-full'>
      <button onClick={MoveDown} className='h-12 py-2 px-8 text-blue-950 hover:text-blue-800 bg-slate-300 hover:bg-slate-50 text-lg font-bold shadow-2xl duration-300  '>Another Tool</button>
    </div>
    <ToDoListPage/>
    <div className='h-[15vh] bg-gradient-to-b to-blue-950 from-blue-800 py-8 flex justify-center w-full'>
      <button onClick={MoveDown} className='h-12 py-2 px-8 mx-2 text-blue-950 hover:text-blue-800 bg-slate-300 hover:bg-slate-50 text-lg font-bold shadow-2xl duration-300  '>Another Tool</button>
      <button onClick={MoveUp} className='h-12 py-2 px-8 mx-2 text-blue-950 hover:text-blue-800 bg-slate-300 hover:bg-slate-50 text-lg font-bold shadow-2xl duration-300  '>Back</button>
    </div>
    </>
  )
}

export default App