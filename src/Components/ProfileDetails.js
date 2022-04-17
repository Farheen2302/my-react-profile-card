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