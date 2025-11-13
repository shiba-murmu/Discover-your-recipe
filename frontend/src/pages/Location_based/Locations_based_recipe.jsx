import React from 'react'
import { useParams } from 'react-router-dom'

function Locations_based_recipe() {
    const { recipeLocationName} = useParams();
  return (
    <>
        <div className='min-h-[100vh] mt-17 md:mt-16'>
            <h1 className='text-3xl font-bold text-center mb-4'>Location {decodeURIComponent(recipeLocationName)} Recipes</h1>
            <p className='text-center mb-8'>Discover recipes tailored to your location!</p>
            {/* Content for location-based recipes goes here */}
        </div>  
    </>
  )
}

export default Locations_based_recipe