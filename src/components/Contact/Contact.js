import React from 'react';
import './Contact.css';
import i18n from './../../../i18n'

const Contact = props => {

    return (
        <div className="page-section-container">
            <div className="page-section">
                <div className="page-section-title">
                    <h3>&nbsp;{i18n.t("contact_section_contact")}&nbsp;&nbsp;</h3>
                </div>
                <div className="page-section-text">
                    {/* <p>{i18n.t("ABOUT_PAGE_SECTION_ABOUT")}</p> */}
                    <p>...</p>
                </div>     
            </div>
        </div>
    )
}

export default Contact;