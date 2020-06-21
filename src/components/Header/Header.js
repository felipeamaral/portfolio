import React, { Component } from 'react'
import i18n from './../../../i18n'
import './Header.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {
    Route,
    NavLink,
    Switch,
    HashRouter
  } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Home from './../pages/Home/Home.js'

const Header = props => (
    <HashRouter>
        <header className="header-container">
            <div className="header-navigation">
                <div className="header-navigation-title">
                    <span><NavLink exact to="/">felipe amaral</NavLink></span>
                </div>
                <div className="spacer" />
                <div className="header-navigation-list">
                    <ul>
                        <li><AnchorLink href="#about">&nbsp;{i18n.t("header_about")}&nbsp;</AnchorLink></li>
                        <li><AnchorLink href="#resume">&nbsp;{i18n.t("header_resume")}&nbsp;</AnchorLink></li>
                        <li><AnchorLink href="#portfolio">&nbsp;{i18n.t("header_projects")}&nbsp;</AnchorLink></li>
                        <li><AnchorLink href="#contact">&nbsp;{i18n.t("header_contact")}&nbsp;</AnchorLink></li>
                    </ul>
                </div>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
            </div>
        </header>
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route component={NotFound}/> */}
        </Switch>
        
    </div>
    </HashRouter>
)

export default Header;