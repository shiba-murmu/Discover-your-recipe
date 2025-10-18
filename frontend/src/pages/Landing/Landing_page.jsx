import React from 'react'
import DarkModeToggle from '../../utils/Theme/DarkModeToggle'

function Landing_page() {
  return (
    <> 
        <div>
            {/* <DarkModeToggle /> */}
            <div className='h-80 md:h-96 w-full bg-[var(--primary-color)] flex flex-col justify-center items-center'>
                {/* This one is other div */}
                <img src="" alt="" />
            </div>
            <div className='h-96 w-full bg-[var(--secondary-color)] flex flex-col justify-center items-center  '>
                {/* This one is for other animation division */}
            </div>
            <div className='h-80 md:h-96 w-full bg-[var(--background-color)] flex flex-col justify-center items-center'>
                {/* This one is other division for animation. */}
            </div>
            <div className='h-40 w-full bg-[var(--text-color)] flex flex-col justify-center items-center'>
                {/* aslkdfalksdflasmdf */}
            </div>
        </div>
    </>
  )
}

export default Landing_page