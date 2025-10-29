import React from 'react'
import profile from '../../assets/food.png'
function Profile() {
    return (
        <>
          <div className='min-h-screen flex flex-col items-center justify-start'>
            <div className='h-40 md:h-50 w-full flex items-center justify-center gap-10  md:justify-start' >
                <img src={profile} className='h-30 w-30 md:h-40 md:w-40 object-cover md:ml-10 border-3 border-green-600 dark:border-amber-50 rounded-full ' alt="" />
                <div className='hidden md:block'>
                    <h1 className='text-2xl font-extrabold'>Shiba Murmu</h1>
                    <h4>Posts  :  5</h4>
                </div>
            </div>
            <div className='h-10 flex flex-col'>
                <h1 className='text-xl font-extrabold'>Shiba Murmu</h1>
                <h3 className='text-center'>Posts : 5</h3>
            </div>
          </div>
        </>
    )
}

export default Profile;