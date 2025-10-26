import React from 'react'
import DarkModeToggle from '../../utils/Theme/DarkModeToggle'

function Navigation_bar() {
    return (
        <>
            <div className='h-16 md:h-20 bg-green-100 flex items-center justify-center'>
                <div className='w-11/12 grid grid-cols-6 gap-4 place-content-center'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Services</div>
                    <div>Contact</div>
                    <div>Login</div>
                    <div>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation_bar