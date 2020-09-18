import React from "react"
import './mobileNavStyle.css';

const MobileNavigation = () =>
{
    return(
        <div className="asdf"> 
            <div className="exitMobile"> X </div>
            <div className="mobileMenu"> 

                <ul>    
                    <li> <a href="#">Home</a>  </li>
                    <li> <a href="#">Contact</a>  </li>
                </ul> 
            </div> 
        </div> 
    )
}

export default MobileNavigation; 