"use client";
import { useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playAudio}>Play</button>
      <audio
        ref={audioRef}
        src="/greenday.mp3"
        preload="none"
        onEnded={playAudio} // Restart the audio when it ends
      />
    </div>
  );
}
