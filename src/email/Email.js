
import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react"; 
import "./email.css";

const Email = () =>
{

    const URL = "https://gmail.us2.list-manage.com/subscribe/post?u=6f212258d1c2cdfd3a97ea0c0&amp;id=472fbd7c68";


    return(
        <div className="emailContainer">
            <div className="emailInfoContainer"> 
                <h2> Sign up for updates</h2>
                <p> Get Notified When New FIU Stuff Are Added </p>
            </div>

            <div className="emailInputContainer"> 
            <MailchimpSubscribe url={URL}>
                <div> 
                <div>
                <input type="email" id="mce-EMAIL" name="EMAIL" placeholder="Email"/>
                <div aria-hidden="true"><input type="text" name="b_6f212258d1c2cdfd3a97ea0c0_472fbd7c68" tabindex="-1" value=""/></div> 
                <button className="emailBtn" name="email" type="submit">Subscribe</button>
                </div>

                </div> 
            </MailchimpSubscribe>
            </div>



            
        </div> 
    )
}


export default Email;

