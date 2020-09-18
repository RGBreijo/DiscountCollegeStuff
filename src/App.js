import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import SchoolName from './SchoolName/SchoolName';
import DiscountCard from "./DiscountCard/DiscountCard";
import MobileHeader from "./MobileHeader/MobileHeader";


import './App.css';

class App extends Component
{
  render()
  {
    return(
      <div> 

          <Navigation/>
          <MobileHeader/> 





          <div> 
            <DiscountCard 
            itemName = "Wall Street Journal" 
            location = "Online" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://www.google.com/"/>
          </div>
      </div> 
    )

  }
}





export default App;
