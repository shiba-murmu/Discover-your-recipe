import React from 'react'
import DarkModeToggle from '../../../utils/Theme/DarkModeToggle'

function LoginPage() {
    return (
        <>
            <div className='min-h-screen flex items-center flex-col justify-center '>
                <div>
                    <svg className='h-40 w-40 fill-amber-500 dark:fill-amber-50' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 80-80v-148q-26-15-43-50.5T500-500q0-58 26-99t64-41q37 0 63.5 41t26.5 99q0 47-17 82.5T620-368v128h100v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h100v-160q-26-6-43-27.5T280-477v-163h40v151h30v-151h40v151h30v-151h40v163q0 28-17 49.5T400-400v180l80 80Zm0-340Z" /></svg>
                </div>
                {/* <DarkModeToggle /> */}
                <div>
                    <h1 className='text-4xl font-extrabold mb-6 text-center'>Welcome to FoodieMedia</h1>
                    <p className='text-center mb-8'>Login to continue to your foodie journey!</p>
                </div>
                <button className='bg-blue-300 cursor-pointer px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white transition duration-300'>Login with Google</button>
            </div>
        </>
    )
}

export default LoginPage