import React from "react";
import "./navbar.css"

class NavBar extends React.Component{
    render() {
        return (
            <div className="header"> 
                <h1> This is the NavBar! </h1>
                <h1>{this.props.gameMessage}</h1>
                <h1> This is the NavBar! </h1>
            </div>
        )
    }
}

export default NavBar;
