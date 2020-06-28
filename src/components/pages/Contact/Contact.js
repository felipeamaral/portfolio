import React from 'react';
import './Contact.css';
import i18n from '../../../../i18n'
import { SocialMediaIconsReact } from 'social-media-icons-react';

const Contact = props => {

    const backToTop = () => {
        console.log('oie')
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div id="contact" className="contact-container">
            <div className="contact-title-bg"/>   
            <div className="contact-title-text">
                <span>{i18n.t("contact_section_contact")}</span>
            </div>  
            <div className="contact-content-container">
                <div className="contact-text-container">
                    <span className="contact-thx-text">{i18n.t("contact_thx_text")}</span>
                    <span className="contact-social-text">{i18n.t("contact_social_media")}</span>
                </div>
                
                <div className="contact-social-media">
                    <div className="contact-social-item">
                        <SocialMediaIconsReact icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,172,238,1)" iconSize="3" roundness="50%" size="60" />
                        <span> amaral.felipeaugusto@gmail.com </span>
                    </div>
                    <div className="contact-social-item">
                        <SocialMediaIconsReact icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,114,177,1)" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/felipeaamaral/" size="60" />
                        <span> @felipeaamaral </span>
                    </div>
                    <div className="contact-social-item">
                        <SocialMediaIconsReact icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,172,238,1)" iconSize="3" roundness="50%" url="https://twitter.com/felipea_amaral" size="60" />
                        <span> @felipea_amaral </span>
                    </div>
                    <div className="contact-social-item">
                        <SocialMediaIconsReact icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url="https://github.com/felipeamaral" size="60"/>
                        <span> @felipeaamaral </span>
                    </div>
                </div>
                <div className="back-to-top" onClick={backToTop}>
                    <span>{i18n.t("back_to_top")}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;