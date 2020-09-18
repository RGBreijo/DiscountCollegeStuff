import React from "react"
import './mobileNavStyle.css';

const MobileNavigation = () =>
{

    let  closeMobileNavBar = (e) => 
    {
        let target = e.target || e.srcElement; 
        let mobileNavBarContainer = target.parentElement; 
        mobileNavBarContainer.style.width = "0";
        mobileNavBarContainer.style.transition = "width 0.2s";
    }





    return(
        <div className="asdf"> 
            <div className="exitMobile"  onClick ={closeMobileNavBar}> X </div>
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