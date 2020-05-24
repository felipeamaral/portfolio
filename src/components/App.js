import React, { Component } from 'react'
import './App.css';
import Header from './Header/Header.js'
import SideDrawer from './SideDrawer/SideDrawer.js'
import Backdrop from './Backdrop/Backdrop.js'
import {SocialMediaIconsReact} from 'social-media-icons-react';
// import IMAGE from './../assets/images/foto_5.png';

// const PERSONAL_IMAGE_2='http://drive.google.com/uc?id=1hzRCPQAP_XAGsj9vVjLr-PVGj3_dBzr7'

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

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={() => this.backdropClickHandler()}/>
        }
        return (
            <div>
                <Header drawerClickHandler={() => this.drawerToggleClickHandler()} />
                {backdrop}
                <SideDrawer show={this.state.sideDrawerOpen}/>
                <div className="landing-personal-image">
                    {/* <img src={IMAGE}/> */}
                </div> 
                <div className="landing-social-media">
                    <div className="landing-social-media-item">
                        <SocialMediaIconsReact icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,172,238,1)" iconSize="3" roundness="50%" url="https://twitter.com/felipea_amaral" size="24" />
                    </div>
                   
                    <div className="landing-social-media-item">
                        <SocialMediaIconsReact icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,114,177,1)" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/felipeaamaral/" size="24" />    
                    </div>
                   
                    <div className="landing-social-media-item">
                        <SocialMediaIconsReact icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url="https://github.com/felipeamaral" size="24" />    
                    </div>                    
                </div>
                <div className="landing-main-text">
                    <span>Hi, I'm&nbsp;</span>            
                    <span className="landing-main-text-offset">&nbsp;Felipe Amaral&nbsp;</span>
                </div>
                <div className="landing-sub-text"> 
                    <span> A </span>
                    <span className="landing-sub-text-offset"> &nbsp;product manager&nbsp;</span>
                    <span> trying to </span>
                    <span>do something &nbsp;</span>
                    <span className="landing-sub-text-offset">&nbsp;meaninful&nbsp;</span>
                </div>        
            </div>
        )
    }
}