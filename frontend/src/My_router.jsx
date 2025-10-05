import React from 'react'
import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';

//.............................pages path importation here......................
import LoginPage from './pages/Auth/Login/LoginPage';
// .............................................................................

function My_router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default My_router