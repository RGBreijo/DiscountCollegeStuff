import React from "react"; 
import "./email.css";

const Email = () =>
{
    return(
        <div className="emailContainer">
            <div className="emailInfoContainer"> 
                <h2> Sign up for updates</h2>
                <p> Get Notified When New FIU Stuff Are Added </p>
            </div>

            <div className="emailInputContainer"> 
            <input type="email" id="email" name="email" placeholder="Email"/>
            <button className="emailBtn" name="email" >Subscribe</button>
            </div>
        </div> 
    )
}


export default Email;