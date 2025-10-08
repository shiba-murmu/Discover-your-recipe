import React from 'react'
import DarkModeToggle from '../../../utils/Theme/DarkModeToggle'

function LoginPage() {
    return (
        <>
            <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Hello Theme Mode 🌗</h1>
                <DarkModeToggle />
            </div>
        </>
    )
}

export default LoginPage