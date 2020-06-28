import React, { Component } from 'react'
import './App.css';
import Header from './Header/Header.js'
import SideDrawer from './SideDrawer/SideDrawer.js'
import Backdrop from './Backdrop/Backdrop.js'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'

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
                <div className='app-container'>
                    <Home />
                    <About />
                    <Projects />
                    <Resume />
                    <Contact />
                </div>
                <SideDrawer show={this.state.sideDrawerOpen} click={() => this.insideDrawerClickHandler()} />
            </div>
        )
    }
}