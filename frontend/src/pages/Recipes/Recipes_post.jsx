import React from 'react'
import './Recipe_post.css';
// import img from '../../assets/image/food.png';
import image from '../../assets/large_food_2.jpg';
import image2 from '../../assets/larger_screen_food.jpg';
import { Link } from 'react-router-dom';

function Recipes_post() {
    const recipeDetails = [
        { location: "Bengal", description: "A delicious blend of spices and flavors.", image: image },
        { location: "Tamil Nadu", description: "A savory and aromatic experience.", image: image2 },
        { location: "Gujarat", description: "A sweet and tangy delight.", image: image },
        { location: "Punjab", description: "A hearty and robust meal.", image: image2 },
        { location: "Kerala", description: "A tropical and spicy treat.", image: image },
        { location: "Jharkhand", description: "A rustic and flavorful dish.", image: image2 },
        { location: "Rajasthan", description: "A spicy and aromatic dish.", image: image }
    ];

    // 🟢 Shuffle the list randomly
    const shuffledRecipes = [...recipeDetails].sort(() => Math.random() - 0.5);

    return (
        <>
            <div className="min-h-[100vh] mt-17 md:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 p-0 md:p-0">

                    {shuffledRecipes.map((recipe, index) => (
                        <div key={index} className="h-[30vh] w-full">
                            <Link to={`/location/${encodeURIComponent(recipe.location)}`}>
                                <RecipeCard 
                                    recipeImage={recipe.image}
                                    recipeLocation={recipe.location}
                                    recipeDescription={recipe.description}
                                />
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}


export default Recipes_post

function RecipeCard({ recipeLocation, recipeDescription, recipeImage }) {
    return (
        <div className="h-[30vh] w-full text-white flex items-end justify-center" style={{ backgroundImage: `url(${recipeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="card_background flex flex-col justify-end h-full w-full p-2 ">
                <h1 className="text-xl font-bold">{recipeLocation}</h1>
                <p className="text-xs">{recipeDescription}</p>
            </div>
        </div>
    )
}