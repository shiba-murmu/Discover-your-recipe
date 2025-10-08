import React from 'react'
import My_router from './My_router'
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
        {/* This element is used to wrap the entire app */}
            <My_router />
        </BrowserRouter>
    )
}

export default App