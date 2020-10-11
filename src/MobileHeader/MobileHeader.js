import React from 'react'; 
import HambugerIcon from '../icons/HamburgerIcon/HamburgerIcon';
import DesktopNavigation from "../Navigation/DesktopNavigation/DesktopNavigation";
import './mobileHeader.css';



const MobileHeader = () => 
{
    return(
        <div> 

            <div className="mobileHeader"> 
                    <HambugerIcon/>
            </div> 

            <div className="desktopHeader"> 
                <DesktopNavigation/>
            </div> 


        </div> 
    )
}


export default MobileHeader; 

