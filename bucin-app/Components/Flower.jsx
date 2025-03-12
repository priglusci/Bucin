"use client";

import { useEffect } from "react";
import "./FlowerStyle.css"; // Ensure styles are properly imported

const FlowerAnimation = ({ correct }) => {
  useEffect(() => {
    if (correct === true) {
      document.getElementById("flows")?.classList.remove("not-loaded");
    } else {
      document.getElementById("flows")?.classList.add("not-loaded");
    }
  }, [correct]);

  return (
    <div id="flows" className="relative w-full min-h-screen">
      <div className="absolute text-[20px] text-white z-10 top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-center">Hai Perempuanku, senang bisa mengenalmu. Iya tau, bunganya cantik ya?
        sama kek kamu xixixi.</p>
        <p className="text-center">Scroll aku dong 😁❤️</p>
      </div>
      <div className="mainFlowers">
        <div className="night"></div>
        <div className="flowers">
          {[1, 2, 3].map((num) => (
            <div className={`flower flower--${num}`} key={num}>
              <div className={`flower__leafs flower__leafs--${num}`}>
                {[1, 2, 3, 4].map((leaf) => (
                  <div
                    className={`flower__leaf flower__leaf--${leaf}`}
                    key={leaf}
                  ></div>
                ))}
                <div className="flower__white-circle"></div>
                {[...Array(8)].map((_, i) => (
                  <div
                    className={`flower__light flower__light--${i + 1}`}
                    key={i}
                  ></div>
                ))}
              </div>
              <div className="flower__line">
                {[...Array(num === 1 ? 6 : 4)].map((_, i) => (
                  <div
                    className={`flower__line__leaf flower__line__leaf--${i + 1}`}
                    key={i}
                  ></div>
                ))}
              </div>
            </div>
          ))}

          <div className="grow-ans" style={{ "--d": "1.2s" }}>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>

          {[1, 2].map((num) => (
            <div className="growing-grass" key={num}>
              <div className={`flower__grass flower__grass--${num}`}>
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                {[...Array(8)].map((_, i) => (
                  <div
                    className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}
                    key={i}
                  ></div>
                ))}
                <div className="flower__grass__overlay"></div>
              </div>
            </div>
          ))}

          {[1.2, 2.4, 2.8, 3.2].map((d, index) => (
            <div className="grow-ans" key={index} style={{ "--d": `${d}s` }}>
              <div className={`flower__g-right flower__g-right--${index + 1}`}>
                <div className="leaf"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerAnimation;
