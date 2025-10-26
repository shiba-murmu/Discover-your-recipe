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
            <div className="min-h-screen w-screen">
                <div className="relative z-10 h-[50vh] md:h-screen w-screen overflow-hidden">
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
                    <div className="image_overlay inset-0 flex flex-col  justify-center md:justify-center items-center bg-opacity-40 text-white font-bold">
                        <div className="md:mt-3">
                            <h1 className="text-4xl md:text-9xl text-center">Welcome to Foodie <br className="hidden md:block" />  media <svg className='inline h-15 w-15 md:h-30 md:w-30 animate-pulse' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#8fe7fb"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 80-80v-148q-26-15-43-50.5T500-500q0-58 26-99t64-41q37 0 63.5 41t26.5 99q0 47-17 82.5T620-368v128h100v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h100v-160q-26-6-43-27.5T280-477v-163h40v151h30v-151h40v151h30v-151h40v163q0 28-17 49.5T400-400v180l80 80Zm0-340Z" /></svg> </h1>
                        </div>
                        <div>
                            {/* Other text can be added to here to improve the layout for the page. */}
                        </div>
                        <div>
                            {/* Pending text will be added here. */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[10vh] items-center justify-center">
                    < GetStartedNavigation />
                </div>
            </div>
        </>

    );
}

export default Landing_page;


function GetStartedNavigation() {
    return (
        <>
            <div>
                <a className="bg-green-100 py-4 px-4 rounded">Get Started</a>
            </div>
        </>
    )
}