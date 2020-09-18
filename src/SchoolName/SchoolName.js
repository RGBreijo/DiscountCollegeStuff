import React from "react"; 
import './fiuSchool.css';

// Need to see how to put in different style based on school name 

const SchoolName = (props) => 
{
    return(
        <div> 
            <h1 className="fiuLogo"> {props.schoolName} </h1> 
        </div> 
    )
}

export default SchoolName;