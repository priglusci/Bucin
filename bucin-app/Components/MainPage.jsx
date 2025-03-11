"use client"
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import AudioPlayer from './AudioPlayer'

const MainPage = () => {
  const [valueCode, setValueCode] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); // State to control visibility

  // Function to handle button click
  const handleClick = () => {
    if (valueCode.toUpperCase() === "QWERTY") {  // Ensures case-insensitive comparison
        console.log(valueCode);
        setIsCorrect(true); // Trigger disappearance
    } else {
        console.log("Salah ya cantik");
    }
  };

  return (
    <div className='w-full min-h-screen flex bg-black'>
       <div id='door' className={`w-full bg-black flex transition-opacity duration-4000 ${isCorrect ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className='w-full flex items-center justify-center'>
            <div className="relative rounded-full overflow-hidden bg-white shadow-xl w-72">
            <input
                className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
                placeholder="WRITE THE CODE HERE"
                name="text"
                type="password"
                value={valueCode}
                onChange={(e) => setValueCode(e.target.value.toUpperCase())}
            />
            <div className="absolute right-2 top-[0.4em]">
                <button
                className="w-14 h-14 rounded-full bg-pink-300 group shadow-xl flex items-center justify-center relative overflow-hidden cursor-pointer p-[5px]"
                onClick={handleClick}
                >
                    <Image src={assets.love} alt='' className='relative z-10'/>
                <div
                    className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
                ></div>
                <div
                    className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
                ></div>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
 
  )
}

export default MainPage;