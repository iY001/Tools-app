import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { FaStop } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";

function Timer() {
    // States
    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    
    useEffect(() => {
      let interval;
    
      if (isRunning) {
        interval = setInterval(() => {
          if (milliseconds > 0) {
            setMilliseconds(prevMilliseconds => prevMilliseconds - 1);
          } else if (seconds > 0) {
            setSeconds(prevSeconds => prevSeconds - 1);
            setMilliseconds(99);
          } else if (minutes > 0) {
            setMinutes(prevMinutes => prevMinutes - 1);
            setSeconds(59);
            setMilliseconds(99);
          } else if (hours > 0) {
            setHours(prevHours => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
            setMilliseconds(99);
          }
        }, 10);
      }
    
      return () => clearInterval(interval);
    }, [milliseconds, seconds, minutes, hours, isRunning]);
    
    // Handlers 
    
      const changeHH = (e) => {
        if (e.target.value > 24) {
          setHours(0);
        } else {
          setHours(e.target.value);
        }
      };
      
      const changeMM = (e) => {
        if (e.target.value >= 60) {
          setMinutes(59);
        } else {
          setMinutes(e.target.value);
        }
      };
      
      const changeSS = (e) => {
        if (e.target.value >= 60) {
          setSeconds(59);
        } else {
          setSeconds(e.target.value);
        }
      };
      
    // Start & Pause

      const startTimer= ()=>{
            if(hours != 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0){
                setIsRunning(true)
            }
      }

      const pauseTimer= ()=>{
            setIsRunning(false)
      }

      const stopTimer= ()=>{
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            setMilliseconds(0)
      }
      
  return (
    <>
    <div id='timer' className='container text-center items-center w-[50%] p-8 bg-white rounded-3xl mx-auto'>
        <h2 className='text-2xl font-bold text-blue-950 '><FaStopwatch className='m-auto text-4xl'/> TIMER</h2>
            <div className='w-full flex justify-center'>
                <section className='flex flex-col mx-10'>
                    <label className='p-6 text-4xl text-blue-950 font-bold'>HH</label>
                    <input value={hours} onChange={changeHH} className='w-32 h-48 bg-blue-950 rounded-lg text-white text-8xl font-bold text-center overflow-hidden'/>
                </section>
                    
                <section className='flex flex-col mx-10'>
                    <label className='p-6 text-4xl text-blue-950 font-bold'>MM</label>
                    <input value={minutes} onChange={changeMM} className='w-32 h-48 bg-blue-950 rounded-lg text-white text-8xl font-bold text-center overflow-hidden'/>
                </section>
                    
                <section className='flex flex-col mx-10'>
                    <label className='p-6 text-4xl text-blue-950 font-bold'>SS</label>
                    <input value={seconds} onChange={changeSS} className='w-32 h-48 bg-blue-950 rounded-lg text-white text-8xl font-bold text-center overflow-hidden'/>
                </section>
                
                <section className='flex flex-col mx-10'>
                    <label className='p-6 text-4xl text-blue-950 font-bold'>MS</label>
                    <input value={milliseconds}className='w-32 h-48 bg-blue-950 rounded-lg text-white text-8xl font-bold text-center overflow-hidden'/>
                </section>
            </div>

            <div className='flex justify-center m-6'>
                {!isRunning && <button onClick={startTimer} className='flex items-center mx-8 bg-green-600 hover:bg-green-500 duration-200  text-white font-semibold px-8 py-2'><FaPlay color='white' className='mr-2 ml-[-10px]'/> START</button>}
                {isRunning && <button  onClick={pauseTimer} className='flex items-center mx-8 bg-yellow-600 hover:bg-yellow-500 duration-200  text-white font-semibold px-8 py-2'><FaPause color='white' className='mr-2 ml-[-10px]'/> PAUSE</button>}
                {!isRunning && <button onClick={stopTimer} className='flex items-center mx-8 bg-red-700 hover:bg-red-600 duration-200  text-white font-semibold px-8 py-2'><FaStop color='white' className='mr-2 ml-[-10px]'/> STOP</button>}
            </div>
    </div>
    
    
    </>
  )
}

export default Timer