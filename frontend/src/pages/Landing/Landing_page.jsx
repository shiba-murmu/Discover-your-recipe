import React, { useEffect, useState } from "react";
import img1 from '../../assets/image/static/png_type/1.png'
import img2 from '../../assets/image/static/png_type/2.png'
import img3 from '../../assets/image/static/png_type/3.png'
import img4 from '../../assets/image/static/png_type/4.png'
import img5 from '../../assets/image/static/png_type/5.png'
import img6 from '../../assets/image/static/png_type/6.png'
import Fade_slider from '../../components/Slider/Fade_slider'
import "./Landing_page.css";
import Redirect_button from "../../components/RedirectButton/Redirect_button";
import { Link } from 'react-router-dom';

// function Landing_page() {
//     // ✅ Imported images
//     const images = [food, food_2, larger_screen, larger_screen_2];

//     // ✅ Keep track of which image is active
//     const [index, setIndex] = useState(0);

//     // ✅ Automatically change background every few seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % images.length);
//         }, 9000); // Change every 4 seconds
//         return () => clearInterval(timer);
//     }, [images.length]);

//     return (
//         <>
//             <div className="min-h-screen w-screen">
//                 <div className="relative z-10 h-[100vh] md:h-screen w-screen overflow-hidden">
//                     {/* ✅ Stack all images on top of each other */}
//                     {images.map((img, i) => (
//                         <div
//                             key={i}
//                             className={`absolute inset-0 bg-cover bg-center transition-opacity  ${i === index ? "opacity-100" : "opacity-0"
//                                 }`}
//                             style={{
//                                 backgroundImage: `url(${img})`,
//                             }}
//                         ></div>
//                     ))} 
//                     {/* ✅ Optional overlay text */}
//                     <div className="image_overlay inset-0 flex flex-col  justify-center md:justify-center items-center bg-opacity-40 text-white font-bold">
//                         <div className="md:mt-3">
//                             <h1 className="text-4xl md:text-7xl text-center">Welcome to Foodie <br className="hidden md:block" />  media <svg className='inline h-15 w-15 md:h-30 md:w-30 animate-pulse' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#8fe7fb"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 80-80v-148q-26-15-43-50.5T500-500q0-58 26-99t64-41q37 0 63.5 41t26.5 99q0 47-17 82.5T620-368v128h100v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h100v-160q-26-6-43-27.5T280-477v-163h40v151h30v-151h40v151h30v-151h40v163q0 28-17 49.5T400-400v180l80 80Zm0-340Z" /></svg> </h1>
//                         </div>
//                         <div>
//                             {/* Other text can be added to here to improve the layout for the page. */}
//                             {/* <div className="flex flex-col items-center justify-center">
//                                 < Redirect_button />
//                             </div> */}
//                             <Link className='inline-block text-md  px-7 py-2 rounded-md font-semibold hover:bg-gray-100
//                             hover:text-black transition duration-300 border border-gray-400 ease-in-out' to="/home">
//                                 Get Started
//                             </Link>
//                         </div>
//                         <div className="absolute  z-20 bottom-15 md:bottom-8 max-w-2xl text-center px-4 md:px-0 text-sm md:text-lg font-light">
//                             {/* Pending text will be added here. */}
//                             <p>
//                                 A global platform where anyone can share their recipes, explore diverse cuisines, and connect with a community of food lovers.
//                                 Start your culinary journey today!
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Landing_page



function Landing_page() {
    return (
        <>
            <div className="min-h-screen w-screen bg-[#4f7c83] flex flex-col items-center justify-center">
                <div className="text-4xl md:text-7xl font-bold text-white mb-10 text-center font-bolder">
                    Welcome to Foodie Media
                </div>
                <div className="h-[30vh] w-[30vh] md:h-[40vh] md:w-[40vh] flex items-center justify-center">
                    <Fade_slider>
                        {
                            [img1, img2, img3, img4, img5, img6].map((img, index) => (
                                <div key={index} className="h-[30vh] w-[30vh] flex items-center justify-center">
                                    <img src={img} alt={`Slide ${index + 1}`} className="h-full w-full object-contain" />
                                </div>
                            ))
                        }
                        
                    </Fade_slider>
                </div>
                <div className="mt-10 mb-10">
                    <Link className='inline-block text-md  px-7 py-2 rounded-md font-semibold bg-white hover:bg-gray-100
                    hover:text-black transition duration-300 border border-gray-400 ease-in-out' to="/home">
                        Get Started
                    </Link>
                </div>
                <div className="absolute hidden md:block  z-20 bottom-15 md:bottom-8 max-w-2xl text-center px-4 md:px-0 text-sm md:text-lg font-light text-white">
                    <p>
                        A global platform where anyone can share their recipes, explore diverse cuisines, and connect with a community of food lovers.
                        Start your culinary journey today!
                    </p>
                </div>

            </div>
        </>
    )
}

export default Landing_page