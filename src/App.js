import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import SchoolName from './SchoolName/SchoolName';
import DiscountCard from "./DiscountCard/DiscountCard";
import MobileHeader from "./MobileHeader/MobileHeader";
import Email from "./email/Email";
import Fotter from "./footer/Footer";


import wallStreetJournalLogo from "./images/wallStreetJournalLogo.png"


import './App.css';

class App extends Component
{
  render()
  {
    return(
      <div> 

          <Navigation/>
          <MobileHeader/> 
          <SchoolName schoolName = "FIU" test="App"/>


        <div className="mainContentContainer"> 


          <div className="cardHolderContainer"> 
          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Wall Street Journal" 
            location = "Online" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://www.google.com/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Wall Street Journal" 
            location = "Online" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://www.google.com/"/>
          </div>


          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Wall Street Journal" 
            location = "Online" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://www.google.com/"/>
          </div>



          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Wall Street Journal" 
            location = "Online" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://www.google.com/"/>
          </div>

          </div> 

          </div> 

          <div className="mainContentContainer"> 
              <Email/>
          </div>

          <div> 
              <Fotter/>
          </div> 
         
      </div> 
    )

  }
}





export default App;
