import React, { useEffect, useState } from "react";
import food from "../../assets/food.png";
import food_2 from "../../assets/food2.png";
import larger_screen from "../../assets/larger_screen_food.jpg";
import larger_screen_2 from "../../assets/large_food_2.jpg";
import "./Landing_page.css";

function Landing_page() {
    // ✅ Imported images
    const images = [food, food_2, larger_screen, larger_screen_2];

    // ✅ Keep track of which image is active
    const [index, setIndex] = useState(0);

    // ✅ Automatically change background every few seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 9000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            <div className=" bg-red-500 " style={{ height: '120vh' }}>

                <div className="relative z-10 h-[50vh] w-screen overflow-hidden">
                    {/* ✅ Stack all images on top of each other */}
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity  ${i === index ? "opacity-100" : "opacity-0"
                                }`}
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        ></div>
                    ))}
                    {/* ✅ Optional overlay text */}
                    <div className="absolute image_overlay inset-0 flex flex-col  justify-center md:justify-center items-center bg-opacity-40 text-white font-bold">
                        <div className="md:mt-3">
                            <h1 className="text-4xl md:text-9xl text-center">Welcome to Foodie <br className="hidden md:block" />  media <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e3e3e3"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 80-80v-148q-26-15-43-50.5T500-500q0-58 26-99t64-41q37 0 63.5 41t26.5 99q0 47-17 82.5T620-368v128h100v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h100v-160q-26-6-43-27.5T280-477v-163h40v151h30v-151h40v151h30v-151h40v163q0 28-17 49.5T400-400v180l80 80Zm0-340Z" /></svg> </h1>
                        </div>
                        <div>
                            {/* Pending text will be added  */}
                        </div>
                        <div>
                            {/* Pending text will be added here. */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-green-400">
                alksdfjl
            </div>
        </>

    );
}

export default Landing_page;
