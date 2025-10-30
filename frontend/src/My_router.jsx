import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom';

//.............................pages path importation here......................
import LoginPage from './pages/Auth/Login/LoginPage';
import Navigation_bar from './components/Header/Navigation_bar';
import Profile from './pages/Profile/Profile';
import Landing_page from './pages/Landing/Landing_page';
import Signup_page from './pages/Auth/Signup/Signup_page';
import Home_page from './pages/Home/Home_page';
import Recipes_post from './pages/Recipes/Recipes_post';
import Community_page from './pages/Community/CommunityPage/Community_page';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer_page from './components/Footer/Footer_page';
import ScrollToTopRoutesChange from './utils/Routes_Changing/ScrollToTopRoutesChange';

// .............................................................................

function My_router() {
    const location = useLocation();

    const hideNavbarRoutes = ["/", '/login', '/signup']; // Add routes where you want to hide the navbar
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
    const hideFooterRoutes = ["/"]; // Add routes where you want to hide the footer
    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
    return (
        <>
            {/* Scroll to top whenever routes changes.. */}
            <ScrollToTopRoutesChange />
            {/* public routes */}
            {!shouldHideNavbar && <Navigation_bar />}
            <Routes >
                <Route path='/contact' element={< Contact />} />
                <Route path='/About' element={<About />} />
                <Route path='/community' element={<Community_page />} />
                <Route path='/recipe-post' element={<Recipes_post />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signup' element={<Signup_page />} />
                <Route path='/home' element={<Home_page />} />
                <Route path='/' element={<Landing_page />} />
            </Routes>
            {!shouldHideFooter && <Footer_page />}
        </>
    )
}

export default My_router