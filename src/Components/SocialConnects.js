import React from "react"
import twitter from '../Images/Twitter Icon.png'
import facebook from '../Images/Facebook Icon.png'
import instagram from '../Images/Instagram Icon.png'
import github from '../Images/GitHub Icon.png'


export default function SocialConnects() {
    return (
        <footer className="social_connects">
            <a  href="#"><img src={twitter} alt='facebook link'></img></a>
            <a  href="#"><img src={facebook} alt='facebook link'></img></a>
            <a  href="#"><img src={instagram} alt='facebook link'></img></a>
            <a  href="#"><img src={github} alt='facebook link'></img></a>
        </footer>
    )
}