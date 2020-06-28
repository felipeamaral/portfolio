import React from 'react';
import i18n from './../../../../i18n'
import './Home.css';
import IMAGE from './../../../assets/images/foto_5.png';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import {
    useHistory,
  } from "react-router-dom";

const Home = props => {
    const history = useHistory()

    const goToAbout = () => {
        history.push('/about')
    }

    const goToResume = () => {
        history.push('/resume')
    }

    const goToPortfolio = () => {
        history.push('/projects')
    }

    const goToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div className="home-container">
            <div className="home-image-container">
                <img src={IMAGE}/>
            </div>
            <div className="home-social-media-container">
                <SocialMediaIconsReact icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,172,238,1)" iconSize="3" roundness="50%" url="https://twitter.com/felipea_amaral" size="60" />
                <SocialMediaIconsReact icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,114,177,1)" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/felipeaamaral/" size="60" />
                <SocialMediaIconsReact icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url="https://github.com/felipeamaral" size="60"/>
                
            </div>
            <div className="home-name-container" />
            <div className="home-name-text">
                <span>
                    {i18n.t("HOME_INTRODUCTION_NAME")}&nbsp;
                </span>            
            </div>
            <div className="home-description-container" />
            <div className="home-description-text">
                {i18n.t("HOME_INTRODUCTION_DESCRIPTION")}&nbsp;
            </div>
        </div>
    )
    
}

export default Home;