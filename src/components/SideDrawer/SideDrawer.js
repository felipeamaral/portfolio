import React from 'react';
import './SideDrawer.css';
import i18n from './../../../i18n'
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
                    <li onClick={props.click}><NavLink activeClassName="navigation-active" to="/about">&nbsp;{i18n.t("header_about")}&nbsp;</NavLink></li>
                    <li onClick={props.click}><NavLink activeClassName="navigation-active" to="/projects">&nbsp;{i18n.t("header_projects")}&nbsp;</NavLink></li>
                    <li onClick={props.click}><NavLink activeClassName="navigation-active" to="/contact">&nbsp;{i18n.t("header_contact")}&nbsp;</NavLink></li>
                </ul>
            </nav>
        </HashRouter>  
    )
}

export default SideDrawer