import React from 'react'
import { useEffect, useRef } from "react";

function Landing_page() {
    // This page will be design so much animations and all.
    return (
        <>
            <div className='min-h-screen w-full'>
                <div>
                    {/* side by scroll bar animation here. on moving images. */}
                </div>
                <div>
                    {/* This one is other div */}
                </div>
                <div>
                {/* This one is for other animation division */}
                </div>
                <div>
                    {/* This one is other division for animation. */}
                </div>
            </div>
        </>
    )
}

export default Landing_page


function AutoScroll() {
    const scrollRef = useRef(null);

   useEffect(() => {
  const scrollContainer = scrollRef.current;
  let scrollInterval;

  const startScroll = () => {
    scrollInterval = setInterval(() => {
      scrollContainer.scrollLeft += 2;
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      }
    }, 20);
  };

  const stopScroll = () => clearInterval(scrollInterval);

  scrollContainer.addEventListener("mouseenter", stopScroll);
  scrollContainer.addEventListener("mouseleave", startScroll);

  startScroll(); // Start automatically

  return () => {
    clearInterval(scrollInterval);
    scrollContainer.removeEventListener("mouseenter", stopScroll);
    scrollContainer.removeEventListener("mouseleave", startScroll);
  };
}, []);


    return (
        <div className="p-4 bg-gray-100 min-h-screen flex ">
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-[100%] p-2"
                style={{
                    whiteSpace: "nowrap",
                }}
            >
                {/* 🖼️ Example boxes */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="w-[200px] h-96 flex items-center justify-center text-xl font-semibold bg-indigo-400 text-white rounded-lg flex-shrink-0"
                    >
                        Card {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}


