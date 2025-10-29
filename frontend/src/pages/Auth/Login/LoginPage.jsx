import React from 'react'
import DarkModeToggle from '../../../utils/Theme/DarkModeToggle'

function LoginPage() {
    return (
        <>
            <div className='min-h-screen flex items-center flex-col justify-center '>
                {/* <DarkModeToggle /> */}
                <div>
                    <h1 className='text-4xl font-extrabold mb-6 text-center'>Welcome to FoodieMedia</h1>
                    <p className='text-center mb-8'>Login to continue to your foodie journey!</p>
                </div>
                <button className='bg-blue-300  px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300'>Login with Google</button>
            </div>
        </>
    )
}

export default LoginPage