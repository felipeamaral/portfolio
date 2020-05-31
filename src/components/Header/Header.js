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

import Home from './../pages/Home/Home.js'
import About from './../pages/About/About.js'
import Projects from './../pages/Projects/Projects.js'
import Resume from './../pages/Resume/Resume.js'
import Contact from './../pages/Contact/Contact.js'
import NotFound from './../pages/NotFound/NotFound.js'

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
                        <li><NavLink activeClassName="navigation-active" to="/about">&nbsp;{i18n.t("header_about")}&nbsp;</NavLink></li>
                        <li><NavLink activeClassName="navigation-active" to="/resume">&nbsp;{i18n.t("header_resume")}&nbsp;</NavLink></li>
                        <li><NavLink activeClassName="navigation-active" to="/projects">&nbsp;{i18n.t("header_projects")}&nbsp;</NavLink></li>
                        <li><NavLink activeClassName="navigation-active" to="/contact">&nbsp;{i18n.t("header_contact")}&nbsp;</NavLink></li>
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
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound}/>
        </Switch>
        
    </div>
    </HashRouter>
)

export default Header;