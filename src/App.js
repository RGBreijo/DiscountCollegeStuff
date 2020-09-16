import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import SchoolName from './SchoolName/SchoolName';
import './App.css';

class App extends Component
{
  render()
  {
    return(
      <div> 
          <Navigation/>
          <SchoolName schoolName = "FIU"/>
      </div> 


    )

  }
}





export default App;
