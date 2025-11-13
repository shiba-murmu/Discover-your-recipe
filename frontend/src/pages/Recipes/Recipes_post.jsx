import React from 'react'
import './Recipe_post.css';
// import img from '../../assets/image/food.png';
import image from '../../assets/large_food_2.jpg';

function Recipes_post() {
    // Recipies from different regions will show here.,
    return (
        <>
            <div className='min-h-[100vh] mt-17 md:mt-16'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 p-0 md:p-4" >
                    <div className="h-[30vh] w-full ">
                        <RecipeCard />
                    </div>
                    <div className="h-[30vh] w-full bg-red-800 "></div>
                    <div className="h-[30vh] w-full bg-blue-800 "></div>
                </div>
            </div>
        </>
    )
}

export default Recipes_post

function RecipeCard() {
    return (
        <div className="h-[30vh] w-full text-white flex items-end justify-center" style={{ backgroundImage: `url(${image})` , backgroundSize: 'cover', backgroundPosition: 'center'  }}>
            
            <div className="card_background flex flex-col justify-end h-full w-full p-2 ">
                <h1 className="text-xl font-bold">Bengal Recipe</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
        </div>
    )
}