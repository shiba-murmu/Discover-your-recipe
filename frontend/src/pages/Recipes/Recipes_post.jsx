import React from 'react'
// import img from '../../assets/image/food.png';

function Recipes_post() {
    // Recipies from different regions will show here.,
    return (
        <>
            <div className='min-h-[100vh] mt-17 md:mt-16'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 p-0 md:p-4" >
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
        <div className="h-[30vh] w-full  border" style={{ backgroundImage: `url()` }}>
            Recipe card
        </div>
    )
}