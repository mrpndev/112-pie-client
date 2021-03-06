import React from "react";
import "./logout.css"
import logoutPic from "../../../assets/logoutPic.jpg"

const Logout = props => {

    console.log("Logout component", props)

    return(

        <div>
            <img src={logoutPic}
            alt="power button"
            id="logout"
            className="logout"
            onClick={props.clearSession} />
        </div>
    )
}

export default Logout

// Challenge

/*
    Create a boilerplate of a logout component
    After the boilerplate is built, create an img tag that has:
    id of logout
    class of logout
    alt of power button
    a src that links to an image that will be imported from assets called logoutPic
*/

// ! Done by 3:28PM ET