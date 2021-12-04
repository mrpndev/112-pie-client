import React from "react";
import "./navbar.css"
import piePic from "../../assets/pie.jpg"
// const piePic = require("../../assets/pie.jpg")
import Logout from "./Logout/Logout";

const Navbar = (props) => {
    console.log("Navbar Component", props)
    return (
        <div>
            <nav>
                <img src={piePic} alt="pie" id="piePic" />
                <Logout clearSession={props.clearSession} />
            </nav>
        </div>
    )
}

export default Navbar