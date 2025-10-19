import React, { useEffect, useState } from "react";

const AutoBackgroundChanger = ({ images = [], interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  // Change background every few seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  // If no images given
  if (images.length === 0)
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
        No Images Provided
      </div>
    );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Optional Text Overlay */}
      <div className="absolute inset-0 flex justify-center items-center  text-black  text-3xl font-semibold">
        Background Auto Changer 🌅
      </div>
    </div>
  );
};

export default AutoBackgroundChanger;
