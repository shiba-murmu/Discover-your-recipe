import React from 'react'
import My_router from './My_router'
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <My_router />
        </BrowserRouter>
    )
}

export default App