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
            <div className="grid grid-cols-4 gap-[20px]">
              <Image src={assets.y1} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y3} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y4} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y5} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y6} alt="" className="w-[200px] h-[200px]" />
              <Image src={assets.y8} alt="" className="w-[200px] h-[200px]" />
              {/* <p className="text-white">
15 Alasan Kenapa Aku Mencintaimu

Matamu adalah rumahku – Setiap kali aku menatap matamu, aku merasa tenang, seolah-olah dunia hanya milik kita berdua.

Senyummu seperti matahari pagi – Hangat, menyegarkan, dan mampu menghapus lelahku dalam sekejap.

Kamu cantik di segala keadaan – Tanpa makeup, dengan rambut berantakan, atau bahkan saat marah sekalipun, kamu tetap yang paling indah.

Tawamu adalah musik favoritku – Setiap kali kamu tertawa, dunia terasa lebih ringan, lebih indah, lebih berwarna.

Kamu mandiri, tapi tetap membuatku merasa dibutuhkan – Kamu bisa melakukan segalanya sendiri, tapi tetap memilih untuk bersandar padaku.

Kamu adalah definisi ketegaran – Ketika hidup sulit, kamu tetap berdiri tegak, dan itu membuatku semakin kagum padamu.

Caramu mencintaiku begitu tulus – Aku merasakan cinta dalam setiap tindakan kecilmu, dalam tatapanmu, dalam sentuhanmu.

Kamu punya cara unik untuk membuatku bahagia – Kadang dengan hal sederhana seperti mengirim meme lucu atau menyelipkan pesan manis di tengah hari.

Kamu tahu bagaimana menenangkanku – Saat aku lelah atau stres, satu pelukan darimu saja sudah cukup untuk membuat segalanya lebih baik.

Kamu mencintai dirimu sendiri – Dan itu membuatku semakin jatuh cinta, karena wanita yang menghargai dirinya sendiri adalah wanita yang paling mempesona.

Kamu selalu menjadi versi terbaik dari dirimu sendiri – Kamu terus belajar, bertumbuh, dan berusaha, dan itu menginspirasiku setiap hari.

Kamu mengajarkanku arti kesabaran dan pengertian – Dengan cintamu, aku belajar menjadi pria yang lebih baik.

Kamu dan aku, selalu terasa seperti petualangan – Setiap hari bersamamu selalu menyenangkan, penuh kejutan, penuh kebahagiaan.

Kamu adalah rumah bagiku – Tak peduli ke mana aku pergi, aku selalu ingin kembali ke pelukanmu.

Aku mencintaimu karena kamu adalah kamu – Tanpa perlu alasan, tanpa perlu syarat. Aku mencintaimu karena tidak ada yang lebih indah di dunia ini selain menjadi pria yang mencintaimu.

Terdengar bullshit ya? Kamu benar. Semuanya bullshit. Karena aku mencintaimu tanpa alasan. Perasaan itu tumbuh sendiri, dan aku tidak bisa melarangnya. Jika aku mencintaimu karena kamu cantik, lalu bagaimana nantinya jika kamu jelek? Aku mencintaimu bukan karena alasan yang bisa diukur atau diubah. Aku mencintaimu karena hatiku memilihmu. Dan selama hatiku masih berdetak, itu tidak akan berubah. 💕
              </p> */}
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
            text="1.	Matamu adalah rumahku – Setiap kali aku menatap matamu, aku merasa tenang, seolah-olah dunia hanya milik kita berdua."
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
            text="2.	Senyummu seperti matahari pagi – Hangat, menyegarkan, dan mampu menghapus lelahku dalam sekejap"
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
              text="3.	Kamu cantik di segala keadaan – Tanpa makeup, dengan rambut berantakan, atau bahkan saat marah sekalipun, kamu tetap yang paling indah."
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
              text="4.	Tawamu adalah musik favoritku – Setiap kali kamu tertawa, dunia terasa lebih ringan, lebih indah, lebih berwarna."
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
              text="5.	Kamu mandiri, tapi tetap membuatku merasa dibutuhkan – Kamu bisa melakukan segalanya sendiri, tapi tetap memilih untuk bersandar padaku."
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
              text="6.	Kamu adalah definisi ketegaran – Ketika hidup sulit, kamu tetap berdiri tegak, dan itu membuatku semakin kagum padamu."
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
              text="7.	Caramu mencintaiku begitu tulus – Aku merasakan cinta dalam setiap tindakan kecilmu, dalam tatapanmu, dalam sentuhanmu."
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
              text="8.	Kamu punya cara unik untuk membuatku bahagia – Kadang dengan hal sederhana seperti mengirim meme lucu atau menyelipkan pesan manis di tengah hari."
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
              text="9.	Kamu tahu bagaimana menenangkanku – Saat aku lelah atau stres, satu pelukan darimu saja sudah cukup untuk membuat segalanya lebih baik."
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
              text="10.	Kamu mencintai dirimu sendiri – Dan itu membuatku semakin jatuh cinta, karena wanita yang menghargai dirinya sendiri adalah wanita yang paling mempesona."
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
              text="11.	Kamu selalu menjadi versi terbaik dari dirimu sendiri – Kamu terus belajar, bertumbuh, dan berusaha, dan itu menginspirasiku setiap hari."
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
              text="12.	Kamu mengajarkanku arti kesabaran dan pengertian – Dengan cintamu, aku belajar menjadi pria yang lebih baik."
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
              text="13.	Kamu dan aku, selalu terasa seperti petualangan – Setiap hari bersamamu selalu menyenangkan, penuh kejutan, penuh kebahagiaan."
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
              text="14.	Kamu adalah rumah bagiku – Tak peduli ke mana aku pergi, aku selalu ingin kembali ke pelukanmu."
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
              text="15.	Aku mencintaimu karena kamu adalah kamu – Tanpa perlu alasan, tanpa perlu syarat. Aku mencintaimu karena tidak ada yang lebih indah di dunia ini selain menjadi pria yang mencintaimu."
              speed={380}
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
          <div className="w-full rotate-180">
            <Aurora
              colorStops={["#D76C82", "#B03052", "#D76C82"]}
              blend={1}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          {/* <div className="text-[200px] font-extrabold text-pink-400"> HAIII</div>
          <div className="text-[200px] font-extrabold text-pink-600"> HAIII</div> */}
        </div>
      )}
    </div>
  );
};

export default MainPage;
