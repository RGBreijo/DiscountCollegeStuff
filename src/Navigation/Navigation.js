import React from 'react'; 
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/mobileNavigation';

const Navigation = () => 
{

    // A condition that checks the screen size and displayes the one required either desktop or Mobile navigation?
    return(
        <div> 
            <MobileNavigation/>
            <DesktopNavigation/>
        </div> 
    )
}






export default Navigation; 



