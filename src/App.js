import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import SchoolName from './SchoolName/SchoolName';
import DiscountCard from "./DiscountCard/DiscountCard";
import MobileHeader from "./MobileHeader/MobileHeader";
import Email from "./email/Email";
import Fotter from "./footer/Footer";


// images
import wallStreetJournalLogo from "./images/wallStreetJournalLogo.png"
import bookScan from "./images/bookScan.jpg"
import counseling from "./images/Counseling.jpg"
import condoms from "./images/condoms.jpg"
import frostArt from "./images/FrostArt.jpg"
import gym from "./images/gym.jpg"
import printer from "./images/printer.jpg"
import newYorkTimes from "./images/NewYorkTimes.png"
import foodPantry from "./images/FoodPantry.png"
import mcafee from "./images/mcafee.png"
import massage from "./images/massage.jpg"
import microsoft365 from "./images/microsoft365.jpg"
import linkedinLearning from "./images/linkedinLearning.jpg"


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
            itemImagePath = {bookScan}
            itemName = "Book Scanning" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://libanswers.fiu.edu/faq/18025"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {counseling}
            itemName = "Counseling and Psychological Services" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/counseling-and-psychological-services/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {foodPantry}
            itemName = "Food Pantry" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/get-support/student-food-pantry/index.php"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {gym}
            itemName = "Gym" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/recreation/"/>
          </div>


          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {linkedinLearning}
            itemName = "Linkedin Learning" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://linkedinlearning.fiu.edu/"/>
          </div>




          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {massage}
            itemName = "Massage Therapy" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/health-and-fitness/student-health/healthy-living/on-campus-services/massage-therapy/index.php"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {mcafee}
            itemName = "McAfee LiveSafe" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://panthertech.fiu.edu/livesafe/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {microsoft365}
            itemName = "Microsoft 365 package" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://freeoffice.fiu.edu/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {newYorkTimes}
            itemName = "New York times " 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://goglobal.fiu.edu/accessnyt/"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {frostArt}
            itemName = "Patricia and Phillip Frost Art Museum Admission" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://frost.fiu.edu/visit/index.html#:~:text=Admission,the%20museum%20is%20always%20free!"/>
          </div>

          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {printer}
            itemName = "Printing" 
            campus = "MMC BBC" 
            cost = "FREE"
            learnMore = "https://studentaffairs.fiu.edu/campus-services/labs-and-spaces/computer-labs/index.php"/>
          </div>


          <div className="cardHolder"> 
            <DiscountCard 
            itemImagePath = {condoms}
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
