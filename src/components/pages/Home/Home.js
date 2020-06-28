import React from 'react';
import i18n from './../../../../i18n'
import './Home.css';

const Home = props => {
    return (
        <div className="home-container">
            <div className="home-text-container">
                <span className="home-name-text">
                    {i18n.t("HOME_INTRODUCTION_NAME")}&nbsp;
                </span>
                <span className="home-description-text">
                    {i18n.t("HOME_INTRODUCTION_DESCRIPTION")}&nbsp;
                </span>
            </div>
        </div>
    )
    
}

export default Home;