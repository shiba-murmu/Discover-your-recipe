import React from 'react'
import {Link } from 'react-router-dom';
function Redirect_button() {
    return (
        <>
            <div>
                <Link className= 'inline-block bg-green-100 px-4 py-2 rounded-md text-black font-semibold hover:bg-green-200 transition duration-300 ease-in-out' to="/login">
                    Get Started
                </Link>
            </div>
        </>
    )
} 

export default Redirect_button