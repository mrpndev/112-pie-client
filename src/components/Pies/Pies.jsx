// Challenge

// Bronze

// Set up a boilerplate for a component called Pies. Include css file of the same

// Silver

// Add a table with the return. The head will include: Name of Pie, Base of Pie, Crust, Bake Time, Servings, and Rating.

// Gold

// import useState from react. Create state variable of pies that has a default value of an empty array.

// ! 9:42 AM ET

import React, { useState } from "react"
import "./pies.css"

const Pies = props => {

    const [pies, setPies] = useState([])

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default Pies