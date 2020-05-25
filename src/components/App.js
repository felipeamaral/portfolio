import React, { Component } from 'react'
import './App.css';
import Header from './Header/Header.js'
import SideDrawer from './SideDrawer/SideDrawer.js'
import Footer from './Footer/Footer'
import Backdrop from './Backdrop/Backdrop.js'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sideDrawerOpen: false
        }
    }

    drawerToggleClickHandler() {
        this.setState(function (state, props) {
            return {sideDrawerOpen: !state.sideDrawerOpen}
        });
    };

    backdropClickHandler() {
        this.setState({sideDrawerOpen: false});
    }

    insideDrawerClickHandler() {
        this.setState({sideDrawerOpen: false});
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={() => this.backdropClickHandler()}/>
        }
        return (
            <div>
                <Header drawerClickHandler={() => this.drawerToggleClickHandler()} />
                {backdrop}
                <SideDrawer show={this.state.sideDrawerOpen} click={() => this.insideDrawerClickHandler()} />
                <Footer />
            </div>
        )
    }
}