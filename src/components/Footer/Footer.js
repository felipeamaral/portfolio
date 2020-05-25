import React, { Component, useState, useEffect, useCallback } from 'react'
import i18n from './../../../i18n'
import { Redirect } from 'react-router-dom';

import './Footer.css';
import LOGO from './../../assets/images/favicon-32x32.png'
const Footer = props => {

    const [value, setValue] = useState('en')
    const [prevValue, setPrevValue] = useState()
    const [isLoading, setLoading] = useState(false)

    const changeLanguage = (oldLang, newLang) => {
        if (oldLang !== newLang) {
            setValue(newLang)
            setPrevValue(oldLang)
        }
    }

    useEffect(() => {
        console.log('prevValue', prevValue, value)
        if (prevValue && prevValue !== value) {
            handleChange()
        }
    }, [value, prevValue])

    const handleChange = () => {
        let newlang = value;
        i18n.changeLanguage(newlang);
        setLoading(true)
    };

    useEffect(() => {
        if (isLoading) {
            setLoading(false)
            window.location.reload()
        }
    }, [isLoading])

    return (
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
                        <span className="footer-flag-left" onClick={() => changeLanguage('pt', 'en')}>
                            <img
                                alt="English"
                                src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"
                            />
                        </span>
                        <span className="footer-flag-right" onClick={() => changeLanguage('en', 'pt')}>
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
}

export default Footer;