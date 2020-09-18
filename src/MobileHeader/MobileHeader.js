import React from 'react'; 
import SchoolName from '../SchoolName/SchoolName';
import HambugerIcon from '../Navigation/HamburgerIcon';
import './mobileHeader.css';



const MobileHeader = () => 
{
    return(
        <div className="mobileHeader"> 
            <SchoolName schoolName = "FIU"/>
            <HambugerIcon/>
        </div> 
    )
}


export default MobileHeader; 

