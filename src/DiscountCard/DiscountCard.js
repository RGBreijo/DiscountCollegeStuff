import React from "react";

const DiscountCard = (props) => 
{
    return(
        <div> 
            <div> 
                <img src ={props.itemImagePath} alt={props.itemAlt}/>
            </div> 
            <div> 
                <h2> {props.itemName}</h2> 
                <div> 
                    <p> Location: {props.location}</p>
                    <p> Campus: {props.campus}</p>
                    <p> Cost: {props.cost}</p>
                </div> 
            </div> 

            <div> 
                <a href={props.learnMore} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div> 
        </div> 
    )
}


export default DiscountCard; 

