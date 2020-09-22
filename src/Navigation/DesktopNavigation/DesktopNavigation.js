import React from "react";
import "./desktopNavigation.css"

const DesktopNavigation = () =>
{
    return(
        <div className="desktopNavigationContainer">   
            <div> 
                <p className="siteName"> Free College Stuff </p>
            </div> 

            <div className="desktopNavigationListContainer"> 

                <ul> 
                    <li> <a href="#"> Home</a> </li> 
                    <li> <a href="#"> Contact</a> </li> 
                </ul>

            </div> 
        </div>
    )
}

export default DesktopNavigation; 
