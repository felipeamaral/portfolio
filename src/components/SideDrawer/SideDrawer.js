import React from 'react';
import './SideDrawer.css';
import i18n from './../../../i18n'
import {
    NavLink,
    HashRouter
  } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                    <li onClick={props.click}><AnchorLink href="#about">&nbsp;{i18n.t("header_about")}&nbsp;</AnchorLink></li>
                    <li onClick={props.click}><AnchorLink href="#resume">&nbsp;{i18n.t("header_resume")}&nbsp;</AnchorLink></li>
                    <li onClick={props.click}><AnchorLink href="#portfolio">&nbsp;{i18n.t("header_projects")}&nbsp;</AnchorLink></li>
                    <li onClick={props.click}><AnchorLink href="#contact">&nbsp;{i18n.t("header_contact")}&nbsp;</AnchorLink></li>
                </ul>
            </nav>
        </HashRouter>  
    )
}

export default SideDrawer