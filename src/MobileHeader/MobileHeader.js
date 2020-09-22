import React from 'react'; 
import SchoolName from '../SchoolName/SchoolName';
import HambugerIcon from '../icons/HamburgerIcon/HamburgerIcon';
import './mobileHeader.css';



const MobileHeader = () => 
{
    return(
        <div className="mobileHeader"> 
            <HambugerIcon/>
        </div> 
    )
}


export default MobileHeader; 

