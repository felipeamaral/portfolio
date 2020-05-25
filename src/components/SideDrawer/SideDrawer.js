import React from 'react';
import './SideDrawer.css';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";

const SideDrawer = props => {
    let drawerClasses = ['side-drawer']

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    const closeSideDrawerInside = () => {

        props.show = false;
    }

    return (
        <HashRouter>
            <nav className={drawerClasses}>
                <ul>
                    <li onClick={props.click}><NavLink activeClassName="navigation-active" to="/about">&nbsp;about&nbsp;</NavLink></li>
                    <li onClick={props.click}><NavLink activeClassName="navigation-active" to="/projects">&nbsp;projects&nbsp;</NavLink></li>
                    <li onClick={props.click}><NavLink activeClassName="navigation-active" to="/contact">&nbsp;contact&nbsp;</NavLink></li>
                </ul>
            </nav>
        </HashRouter>  
    )
}

export default SideDrawer