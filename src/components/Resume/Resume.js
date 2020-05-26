import React from 'react';
import './Resume.css';
import i18n from './../../../i18n'

const Resume = props => {

    return (
        <div className="page-section-container">
            <div className="page-section">
                <div className="page-section-title">
                    <h3>&nbsp;&nbsp;{i18n.t("about_section_education")}&nbsp;</h3>
                </div>
                <div className="page-section-text">
                    {/* <p>{i18n.t("ABOUT_PAGE_SECTION_ABOUT")}</p> */}
                    <p>...</p>
                </div>     
            </div>
            <div className="page-section">
                <div className="page-section-title">
                    <h3>&nbsp;{i18n.t("about_section_work")}&nbsp;&nbsp;</h3>
                </div>
                <div className="page-section-text">
                    {/* <p>{i18n.t("ABOUT_PAGE_SECTION_ABOUT")}</p> */}
                    <p>...</p>
                </div>     
            </div>
            <div className="page-section">
                <div className="page-section-title">
                    <h3>&nbsp;&nbsp;{i18n.t("about_section_certifications")}&nbsp;</h3>
                </div>
                <div className="page-section-text">
                    {/* <p>{i18n.t("ABOUT_PAGE_SECTION_ABOUT")}</p> */}
                    <p>...</p>
                </div>     
            </div>
        </div>
    )
}

export default Resume;