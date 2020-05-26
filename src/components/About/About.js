import React from 'react';
import './About.css';
import i18n from './../../../i18n'

const About = props => {

    return (
        <div className="page-section-container">
            <div className="page-section">
                <div className="page-section-title">
                    <h3>&nbsp;{i18n.t("about_section_about")}&nbsp;&nbsp;</h3>
                </div>
                <div className="page-section-text">
                    {/* <p>{i18n.t("ABOUT_PAGE_SECTION_ABOUT")}</p> */}
                    <p>...</p>
                </div>     
            </div>
        </div>
    )
}

export default About;