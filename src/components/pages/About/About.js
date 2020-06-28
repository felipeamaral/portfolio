import React from 'react';
import './About.css';
import i18n from '../../../../i18n'
import IMAGE_1 from './../../../assets/images/uyuni.jpeg';
import IMAGE_2 from './../../../assets/images/machupichu.jpeg';
import IMAGE_3 from './../../../assets/images/casa.jpeg';

const About = props => {

    return (
        <div id="about" className="about-container">
            <div className="about-title-bg"/>   
            <div className="about-title-text">
                <span>{i18n.t("about_section_about")}</span>
            </div>  
            <div className="about-text-container">
                <p>{i18n.t("about_me_description_1")}</p>
                <p>{i18n.t("about_me_description_2")}</p>
                <p>{i18n.t("about_me_description_3")}</p>
            </div>
            <img className="about-image-1" src={IMAGE_2}/>
            <img className="about-image-2" src={IMAGE_1}/>
            <img className="about-image-3" src={IMAGE_3}/>
        </div>
    )
}

export default About;