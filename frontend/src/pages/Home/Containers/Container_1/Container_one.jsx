import React, { useState } from 'react'

const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1504674900247-0837df9cc777",
    "https://images.unsplash.com/photo-1504674900247-0977df9cc888",
];


function Container_one() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto mt-10 overflow-hidden rounded-2xl shadow-lg">
            {/* Images container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0 object-cover h-64"
                    />
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
                ❮
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
                ❯
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-3 w-full flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Container_one