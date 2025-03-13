"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Flower from "./Flower";
import Balatro from "./Balatro/Balatro";
import Aurora from "./Aurora/Aurora";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";
import SplitText from "./SplitText/SplitText";
import DecryptedText from "./DecryptedText/DecryptedText";
import './ButtonUIVerse.css'
import Swal from 'sweetalert2'

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
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData();
    formData.append("message", "User clicked Yes!");

    try {
      const response = await fetch("https://formspree.io/f/mwplkjey", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Email sent successfully!");
        Swal.fire({
          title: "SAMA!",
          text: "AKU JUGA YES!",
          imageUrl: "https://i.pinimg.com/originals/03/64/e8/0364e8c4bb0ff005cb81eb3dec2eea6b.gif",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: "OKE",
          confirmButtonColor: "#ff5252",
          allowOutsideClick: true,
        });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (error) {
      setStatus("❌ Error: " + error.message);
    }
  };
    const handleSubmitMau = async (event) => {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData();
    formData.append("message", "User clicked Yes!");

    try {
      const response = await fetch("https://formspree.io/f/mwplkjey", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Email sent successfully!");
      Swal.fire({
        title: "SAMA!",
        text: "AKU JUGA MAU!",
        imageUrl: "https://media3.giphy.com/media/l4pTdcifPZLpDjL1e/200w.gif?cid=6c09b952zil55ajww2nzepvt9llkbwgseig3kyde9cnsb5t6&ep=v1_gifs_search&rid=200w.gif&ct=g",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "OKE",
        confirmButtonColor: "#ff5252",
        allowOutsideClick: true,
      });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (error) {
      setStatus("❌ Error: " + error.message);
      
    }
  };
  return (
    <div className="relative w-full min-h-screen">
      <div id="door" className={`absolute w-full min-h-screen z-30 bg-black flex transition-opacity duration-2000 ${isCorrect ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <audio
          ref={audioRef}
          src="/greenday.mp3"
          preload="none"
          onEnded={playAudio} // Restart the audio when it ends
        />

        <div className="w-full flex items-center justify-center z-20">
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
        
        <div className="absolute w-full h-full">
          
          <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={700}
          />
        </div>
      </div>
      <Flower correct={isCorrect} />
      {isCorrect && (

        <div className="bg-black w-full flex flex-col gap-y-[20px]">
          
          <div className="flex justify-center overflow-hidden">
          <Image
            src={assets.y9}
            alt=""
            className="w-[200px] h-auto"
          /><Image
            src={assets.y9}
            alt=""
            className="w-[200px] h-auto"
          /><Image
            src={assets.y9}
            alt=""
            className="w-[200px] h-auto"
          /><Image
            src={assets.y9}
            alt=""
            className="w-[200px] h-auto"
          /><Image
            src={assets.y9}
            alt=""
            className="w-[200px] h-auto"
          />
          <Image
            src={assets.y9}
            alt=""
            className="w-[200px] h-auto"
          />
          </div>
          
          <div className="w-full h-full flex justify-center items-center overflow-hidden">
            <ScrollVelocity
              texts={['I LOVE YOU', 'SO MWUACH']} 
              velocity={100} 
              className=" text-white"
              numCopies={20}
            />
            {/* <div className="grid grid-cols-2 gap-[20px]">
              <Image src={assets.y1} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y2} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y3} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y4} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y5} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y6} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y7} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y8} alt="" className="w-[200px] h-[200px]" />
            </div> */}
          </div>
          <div className="w-full h-full flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 gap-[20px] justify-center justify-self-center">
              <Image src={assets.y3} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y4} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y5} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y8} alt="" className="w-[200px] h-[200px]" />
            </div>
          </div>
           <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
            <SplitText
              text="15 Alasan Aku Mencintaimu"
              className="text-[50px] font-semibold text-center text-white"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          <div className="flex flex-col items-start max-w-[500px]">
            
            <DecryptedText
            text="1.	Aku mencintaimu karena senyummu bisa menghangatkan hariku, bahkan saat dunia terasa dingin dan kejam."
            speed={100}
            maxIterations={20}
            sequential={false}
            className=" text-white"
            parentClassName="all-letters text-white"
            encryptedClassName="encrypted"
            animateOn="view"
            revealDirection="start"
            />
            <DecryptedText
            text="2.	Aku mencintaimu karena caramu tertawa, yang membuat segalanya terasa lebih ringan, bahkan ketika aku sedang terjebak dalam masalahku sendiri."
            speed={120}
            maxIterations={20}
            sequential={false}
            className=" text-white"
            parentClassName="all-letters text-white"
            encryptedClassName="encrypted"
            animateOn="view"
            revealDirection="start"
            />
            <DecryptedText
              text="3.	Aku mencintaimu karena meski kamu tidak percaya diri, aku melihatmu sebagai wanita paling indah yang pernah ada."
              speed={140}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="4.	Aku mencintaimu karena kamu selalu berusaha menyelesaikan segalanya sendiri, tapi tetap membiarkanku berada di sisimu."
              speed={160}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="5.	Aku mencintaimu karena kamu kuat, meskipun dunia sering kali memberimu alasan untuk menyerah."
              speed={180}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="6.	Aku mencintaimu karena caramu mengingatkan aku untuk menjadi lebih baik, bukan karena kamu ingin mengubahku, tapi karena kamu peduli."
              speed={200}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="7.	Aku mencintaimu karena meskipun kamu memiliki banyak luka, kamu tidak pernah membiarkan luka itu mengubah hatimu yang hangat."
              speed={220}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="8.	Aku mencintaimu karena matamu berbicara banyak hal yang tidak bisa kamu ucapkan, dan aku ingin selalu mendengarnya."
              speed={240}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="9.	Aku mencintaimu karena bahkan dalam keheningan, aku merasa nyaman bersamamu."
              speed={260}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="10.	Aku mencintaimu karena kamu tidak sempurna, dan aku tidak butuh kesempurnaan, aku hanya butuh kamu."
              speed={280}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="11.	Aku mencintaimu karena kamu membuatku ingin menjadi versi terbaik dari diriku sendiri, bukan untukmu, tapi karena kamu menginspirasiku."
              speed={300}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="12.	Aku mencintaimu karena aku tidak bisa membayangkan hidup tanpa hadirmu, meski hanya dalam satu hari."
              speed={320}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="13.	Aku mencintaimu karena ketika kamu merasa kecil dan tak berarti, aku justru melihat dunia dalam dirimu."
              speed={340}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="14.	Aku mencintaimu karena kamu adalah satu-satunya hal yang bisa membuatku lupa tentang kerasnya hidup, bahkan untuk sesaat."
              speed={360}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="15.	Aku mencintaimu… karena aku mencintaimu."
              speed={380}
              maxIterations={20}
              sequential={false}
              className=" text-white"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
            <DecryptedText
              text="Terdengar bullshit ya? wkwk iyalagi betul... Semuanya bullshit. Karena aku mencintaimu tanpa alasan. Aku mencintaimu bukan karena keindahan yang bisa pudar tapi karena hatiku memilihmu tanpa alasan."
              speed={380}
              maxIterations={20}
              sequential={false}
              className=" text-white mt-[60px]"
              parentClassName="all-letters text-white"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />

          </div>
            <SplitText
              text="Jadi?"
              className="text-[50px] font-semibold text-center text-white"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <div className="flex flex-col items-start max-w-[500px]">
            
            <DecryptedText
            text="Kamu mau jadi pacarku nda?"
            speed={100}
            maxIterations={20}
            sequential={false}
            className=" text-white"
            parentClassName="all-letters text-white"
            encryptedClassName="encrypted"
            animateOn="view"
            revealDirection="start"
            />
            

          </div>

          
          </div>
          <div className="w-full flex flex-col gap-y-[20px]">
          <div className="w-full flex justify-center items-center gap-x-[30px]">
            <button className="comic-button" onClick={handleSubmit}>
              Yes!
            </button>
            <button className="comic-button" onClick={handleSubmitMau}>
              Mau!
            </button>
          </div>
            {status && <p className="text-center text-white italic">{status}</p>}
          </div>
          
          <div className="w-full rotate-180">
            <Aurora
              colorStops={["#D76C82", "#B03052", "#D76C82"]}
              blend={1}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
