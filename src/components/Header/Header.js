import React, { Component } from 'react'
import './Header.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Header = props => (
    <header className="header-container">
        <div className="header-navigation">
            <div className="header-navigation-title">
                <span><a href="/">felipe amaral</a></span>
            </div>
            <div className="spacer" />
            <div className="header-navigation-list">
                <ul>
                    <li><a href="/">&nbsp;about&nbsp;</a></li>
                    <li><a href="/">&nbsp;projects&nbsp;</a></li>
                    <li><a href="/">&nbsp;contact&nbsp;</a></li>
                </ul>
            </div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </div>
        
    </header>
)

export default Header;