"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Flower from "./Flower";

const MainPage = () => {
  const [valueCode, setValueCode] = useState("");
  const [isCorrect, setIsCorrect] = useState(false); // State to control visibility
  const audioRef = useRef(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  // Function to handle button click
  const handleClick = () => {
    if (valueCode.toUpperCase() === "ILYSMTUC") {
      // Ensures case-insensitive comparison
      console.log(valueCode);
      setIsCorrect(true); // Trigger disappearance
      playAudio();
    } else {
      console.log("Salah ya cantik");
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div id="door" className={`absolute w-full min-h-screen z-30 bg-black flex transition-opacity duration-4000 ${isCorrect ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <audio
          ref={audioRef}
          src="/greenday.mp3"
          preload="none"
          onEnded={playAudio} // Restart the audio when it ends
        />

        <div className="w-full flex items-center justify-center">
          <div className="w-auto flex items-center justify-between gap-x-[5px]">
            <div className="w-[280px] h-[60px] rounded-full bg-white p-[30px] flex items-center justify-center">
              <input
                className="w-fit input bg-transparent outline-none border-none font-mono text-lg font-semibold"
                placeholder="WRITE THE CODE HERE"
                name="text"
                type="password"
                value={valueCode}
                onChange={(e) => setValueCode(e.target.value.toUpperCase())}
              />
            </div>

            <div className="">
              <button
                className="w-14 h-14 rounded-full bg-pink-300 group shadow-xl flex items-center justify-center relative overflow-hidden cursor-pointer p-[5px] border-white border-2"
                onClick={handleClick}
              >
                <Image
                  src={assets.love}
                  alt=""
                  className="relative z-10 w-[40px] h-[40px]"
                />
                <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-full bg-white">asdsdadasd</div>
      </div>
      <Flower correct={isCorrect} />
      {isCorrect && (
        <div className="bg-[#020303] w-full">
            <Image src={assets.y1} alt=""/>
            <Image src={assets.y2} alt=""/>
            <Image src={assets.y3} alt=""/>
            <Image src={assets.y4} alt=""/>
            <Image src={assets.y5} alt=""/>
            <Image src={assets.y6} alt=""/>
            <Image src={assets.y7} alt=""/>
            <Image src={assets.y8} alt=""/>
          <div className="text-[200px] font-extrabold text-pink-400"> HAIII</div>
          <div className="text-[200px] font-extrabold text-pink-600"> HAIII</div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
