import React from "react";
import "./discountCard.css";


const DiscountCard = (props) => 
{
    return(
        <div className="cardContainer"> 
        <div className="mainCardInformationContainer"> 
                <div> 
                    <img src ={props.itemImagePath} alt={props.itemAlt} width="100" height="100"/>
                </div> 
                <div className="cardTextContent"> 
                    <h2 className="cardTitle"> {props.itemName}</h2> 
                    <div className="cardInformation"> 
                        <p className="infoContainer"> <span className="infoType"> Location: </span> <span className="infoValue"> {props.location} </span> </p>
                        <p className="infoContainer"> <span className="infoType"> Campus:   </span> <span className="infoValue"> {props.campus}  </span> </p>
                        <p className="infoContainer"> <span className="infoType"> Cost:     </span> <span className="infoValue"> {props.cost} </span> </p>
                    </div> 
                </div> 
            </div> 

            <div className="moreInformationContainer"> 
                <a href={props.learnMore} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div> 
        </div> 
    )
}


export default DiscountCard; 

