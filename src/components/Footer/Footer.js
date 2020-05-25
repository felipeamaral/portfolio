import React, { Component } from 'react'
import Flags from 'country-flag-icons/react/3x2'
import i18n from './../../../i18n'

import './Footer.css';
import LOGO from './../../assets/images/favicon-32x32.png'
const Footer = props => (
    <footer className="footer-container">
        <div className="footer-navigation">
            <div className="footer-navigation-title">
                <div className="footer-navigation-title-image">
                    <img src={LOGO} />
                </div>
                <div className="footer-navigation-title-text">
                    <p>{i18n.t("footer_by")} Felipe Amaral - 2020 </p>
                </div>
            </div>
            <div className="spacer" />
            <div className="footer-navigation-language">
                <p>{i18n.t("footer_languages")}: </p>
                <div className="footer-flag">
                    <span className="footer-flag-left">
                        <img
                            alt="English"
                            src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"
                        />
                    </span>
                    <span className="footer-flag-right">
                        <img
                            alt="Portugues"
                            src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/BR.svg"
                        />
                    </span>
                    
                </div>
            </div>
        </div>
        
        
    </footer>
)

export default Footer;