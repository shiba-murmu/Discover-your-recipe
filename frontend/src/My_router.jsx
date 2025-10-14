import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom';

//.............................pages path importation here......................
import LoginPage from './pages/Auth/Login/LoginPage';
import Navigation_bar from './components/Header/Navigation_bar';
import Profile from './pages/Profile/Profile';
import Landing_page from './pages/Landing/Landing_page';
import Signup_page from './pages/Auth/Signup/Signup_page';

// .............................................................................

function My_router() {
    const location = useLocation();

    const hideNavbarRoutes = ["/", '/login', '/signup']; // Add routes where you want to hide the navbar
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
    return (
        <>
            {/* public routes */}
            {!shouldHideNavbar && <Navigation_bar />}
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path='/profile' element={<Profile />} />
                {/* <Route path='/signuo' element={<Signup />} */}
                <Route path='/signup' element={<Signup_page />}

                <Route path='/' element={<Landing_page />} />
            </Routes>
        </>
    )
}

export default My_router