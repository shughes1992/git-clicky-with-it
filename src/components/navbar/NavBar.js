import React from "react";
import "./navbar.css";
import classes from './navbar.css';


class NavBar extends React.Component{
    render() {
        return (
            <div className={classes.Navbar}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand mx-auto d-block text-center order-0" href="/">
                        <h1>{this.props.gameMessage}</h1>
                    </a>
                </nav>
            </div>
        )
    }
}

export default NavBar;
