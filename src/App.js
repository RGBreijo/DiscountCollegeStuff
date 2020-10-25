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
            itemName = "Book Scanning" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://libanswers.fiu.edu/faq/18025"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Counseling and Psychological Services" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/counseling-and-psychological-services/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Food Pantry" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/get-support/student-food-pantry/index.php"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Gym" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/recreation/"/>
          </div>


          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Linkedin Learning" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://linkedinlearning.fiu.edu/"/>
          </div>




          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Massage Therapy" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/student-health/healthy-living/on-campus-services/massage-therapy/index.php"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "McAfee LiveSafe" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://panthertech.fiu.edu/livesafe/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Microsoft 365 package" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://freeoffice.fiu.edu/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "New York times " 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://goglobal.fiu.edu/accessnyt/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Patricia and Phillip Frost Art Museum Admission" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://frost.fiu.edu/visit/index.html#:~:text=Admission,the%20museum%20is%20always%20free!"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Printing" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/campus-services/labs-and-spaces/computer-labs/index.php"/>
          </div>


          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Sexual Health Resources " 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/student-health/healthy-living/on-campus-services/sexual-health-resources/index.php"/>
          </div>


          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {wallStreetJournalLogo}
            itemName = "Wall Street Journal" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://library.fiu.edu/business_cba"/>
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
