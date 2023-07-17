
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function MaybeShowNavbar() {
    const location = useLocation();
    
    const isLoginPage = location.pathname === '/';
    const isSignupPage = location.pathname === '/register';
    const isProfilePage = location.pathname === '/profile';
    
    if (isLoginPage || isSignupPage || isProfilePage) {
        return null;
    }
    
    return (
        <Navbar/>
        );
    }
export default MaybeShowNavbar;
    
    