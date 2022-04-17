import React from "react"
import emailImage from '../Images/Icon.png'
import linkedInImage from '../Images/Vector.png'

export default function ContactDetails() {
    
    return (
        <div className="contact_details">
        <button className="contact_details--email"><img  src={emailImage} alt="#"/> Email</button>
        <button className="contact_details--linkedIn"> <img  src={linkedInImage} alt="#"/>LinkedIn</button>
        </div>
    )
    
}