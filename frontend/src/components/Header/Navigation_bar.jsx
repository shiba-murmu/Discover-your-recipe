import React from 'react'
import DarkModeToggle from '../../utils/Theme/DarkModeToggle'

function Navigation_bar() {
  return (
    <>
        <div className='h-16 text-white bg-[var(--light-dark-green)] dark:bg-[var(--dark-darker-black)] dark:text-[var(--lightest-white)] flex items-center justify-center'>
            <div className='w-11/12 grid grid-cols-5 gap-4 place-content-center'>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
                <div>Login</div>
                <DarkModeToggle />
            </div>
        </div>
    </>
  )
}

export default Navigation_bar