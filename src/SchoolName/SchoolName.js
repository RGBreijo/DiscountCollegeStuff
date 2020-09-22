import React from "react"; 
import './fiuSchool.css';

// Need to see how to put in different style based on school name 

const SchoolName = (props) => 
{
    let h1Classes = "fiuLogo " + props.test; 

    return(
        <div> 

               <h1 className={h1Classes}> {props.schoolName} </h1> 
         
        </div> 
    )
}

export default SchoolName;