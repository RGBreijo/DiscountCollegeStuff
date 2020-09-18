import React from "react"; 
import './hamburgerIcon.css';

const HamburgerIcon = () =>
{
    const showMobileNav = () =>
    {
        let mobileNavBarContainer = document.querySelector(".mobileNavContainer");
        mobileNavBarContainer.style.width = "150px";
    }

    return(
        <div className="hamburger" onClick={showMobileNav}> 
            <div> </div> 
            <div> </div> 
            <div> </div> 
        </div> 
    )
}



export default HamburgerIcon; 