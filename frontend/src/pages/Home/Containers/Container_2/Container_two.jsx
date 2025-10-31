import React from 'react'
import Fade_slider from '../../../../components/Slider/Fade_slider'
import Food from '../../../../assets/food.png'
import Food2 from '../../../../assets/food2.png'
import Food3 from '../../../../assets/large_food_2.jpg'


function Container_two() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-16'>
                {/* First container  */}
                <div className='p-4 md:p-4 rounded-lg flex flex-col justify-start gap-4'>
                    {/* Left section content */}
                    <h2 className='text-2xl font-bolder'>Who we are ?</h2>
                    <p>
                        Welcome to <span className="font-semibold text-amber-600">FoodieMedia Recipes</span> —
                        a global community where food lovers from every corner of the world come together
                        to share their passion for cooking. Here, anyone can upload their favorite recipes,
                        showcase photos of their dishes, and explore authentic meals made by people just like you.
                    </p>

                    <p>
                        Whether you're a seasoned chef or a home cook experimenting in the kitchen,
                        <span className='font-semibold text-amber-600'> FoodieMedia Recipes</span> is the perfect place to discover new flavors, learn cooking techniques,
                        and connect with fellow food enthusiasts. Join us today and start your culinary adventure!
                    </p>
                </div>

                {/* <div className='p-4 md:p-4 rounded-lg flex flex-col justify-start gap-4'>
                    <h2 className='text-2xl font-bolder'>Our Mission</h2>
                    <p>
                        At <span className="font-semibold text-amber-600">FoodieMedia Recipes</span>, our mission is to
                        empower food enthusiasts like you to share their culinary creations with the world.
                        We believe that everyone has a unique story to tell through food, and our platform is designed
                        to make it easy for you to showcase your recipes and connect with a global community of fellow cooks.
                    </p>
                    <p>
                        We are committed to providing a user-friendly and inspiring space where you can discover new recipes,
                        learn from others, and share your own culinary journey. Whether you're looking to try new dishes,
                        improve your cooking skills, or simply connect with like-minded food lovers, FoodieMedia Recipes is here to support you every step of the way.
                    </p>
                </div> */}
                <div className='p-0 md:p-0 rounded-lg flex flex-col justify-start gap-4'>
                    {/* Right section content */}
                    <Fade_slider>
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <img
                                src={Food}
                                alt="Slide 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <img
                                src={Food2}
                                alt="Slide 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <img
                                src={Food3}
                                alt="Slide 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Fade_slider>
                </div>
            </div>

            <div>
                {/* Second container */}
                <Second_container />
            </div>
        </>
    )
}

export default Container_two

function Second_container() {
    return (
        <>
            <div className='grid grid-cols-1   md:grid-cols-2 gap-6 p-4 md:p-16'>
                <div className='p-0 md:p-0 rounded-lg flex flex-col justify-start gap-4 order-2 md:order-1'>
                    {/* First section */}
                    <Fade_slider>
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <img
                                src={Food}
                                alt="Slide 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <img
                                src={Food2}
                                alt="Slide 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <img
                                src={Food3}
                                alt="Slide 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Fade_slider>
                </div>
                <div className='p-0 md:p-0 rounded-lg flex flex-col justify-start gap-4 order-1 md:order-2'>
                    {/* Second section */}
                    <div className='p-4 md:p-4 rounded-lg flex flex-col justify-start gap-4'>
                        <h2 className='text-2xl font-bolder'>Our Mission</h2>
                        <p>
                            At <span className="font-semibold text-amber-600">FoodieMedia Recipes</span>, our mission is to
                            empower food enthusiasts like you to share their culinary creations with the world.
                            We believe that everyone has a unique story to tell through food, and our platform is designed
                            to make it easy for you to showcase your recipes and connect with a global community of fellow cooks.
                        </p>
                        <p>
                            We are committed to providing a user-friendly and inspiring space where you can discover new recipes,
                            learn from others, and share your own culinary journey. Whether you're looking to try new dishes,
                            improve your cooking skills, or simply connect with like-minded food lovers, FoodieMedia Recipes is here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}