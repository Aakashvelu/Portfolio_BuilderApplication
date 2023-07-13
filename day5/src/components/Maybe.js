import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowNavbar = ({ childern }) =>{

    const location = useLocation();

    const [showNavbar, setShowNavBar] = useState(false)

    useEffect(() => {
        console.log('this is location: ',location)
        if(location.pathname === '/'){

            setShowNavBar(true)
        }
        else if(location.pathname === '/register'){
            setShowNavBar(true)
        }
        else {

            setShowNavBar(true) 
        }
    }, [location])

    return (
        <div>{showNavbar && childern}</div>
    )
}
export default MaybeShowNavbar;