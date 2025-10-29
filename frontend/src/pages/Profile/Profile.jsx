import React from 'react'
import profile from '../../assets/food.png'
function Profile() {
  return (
    <>
        <div className='flex items-center justify-center h-30 md:h-70'>
            {/* For profile image place */}
            <div className='flex justify-center items-center h-full mt-20 md:mt-0 text-3xl font-bold'>
                <img src={profile} className='h-30 w-30 md:h-40 md:w-40 object-center rounded-full ' alt="" />
            </div>
        </div>
        <div>

        </div>
    </>
  )
}

export default Profile