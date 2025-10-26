import React from 'react'
import My_router from './My_router'
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            {/* This element is used to wrap the entire app */}
            <div className='text-md text-gray-700 dark:text-white md:text-lg'>
                <My_router />
            </div>
        </BrowserRouter>
    )
}

export default App