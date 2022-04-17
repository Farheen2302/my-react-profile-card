* ### Overview
* ### Tech
* ### Learnings
* ### Code
* ### The challenge
* ### Author

# Overview

This is a basic react learning experience project. In this I have created a resume or profile card for myself. This card basically hve three sections:-
1. Profile Phole
2. Basic Details
3. Contact Links
4. Profile Details
5. Social Connects

# Tech 

1. React
2. HTML
3. CSS
4. Javascript

# Learnings
1. Learnt to write a react application from Scratch.
2. Installing nodeJS and using npm to build the project
3. Learnt modifying CSS to create a presentable UI
4. Using Figma to desing the web application
4. Finally, using different components for create a one big application. Each component is independent from each other which makes distribution and developement easy and organized.

# Code

    import React from "react"
    import ProfileDetails from "./Components/ProfileDetails"
    import SocialConnects from "./Components/SocialConnects"

    export default function App() {
    return (
        <div className="app">
            <ProfileDetails />
            <SocialConnects />
        </div>
    )}

-------

    import React from "react"
    import About from "./About"
    import Interests from "./Interests"
    import BasicDetails from "./BasicDetails"
    import ContactDetails from "./ContactDetails"
    import ProfilePhoto from "./ProfilePhoto"

    export default function ProfileDetails() {
        return (
            <main className="profile_details">
                <ProfilePhoto />
                <BasicDetails />
                <ContactDetails />
                <About />
                <Interests />
            </main>
        )
    }

----

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

# The challenge

Earlier I was trying the Scrimba website to write the applicaion. As there is not provision to upload the files I would have to upload the files in 3P storage and ise the link for the file od type images(png, jpg). I was not able to successfully do that. So, I took diff approach to resolve the issue for now. I build the application locally and then finally pushed the code in Github.

# Author

Website - Farheen Nilofer
Fullstack Developer - @Microsoft