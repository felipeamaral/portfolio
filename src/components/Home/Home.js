import React from 'react';
import i18n from './../../../i18n'
import './Home.css';
import IMAGE from './../../assets/images/foto_5.png';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Home = props => {

    return (
        <div className="landing-container">
            <div className="landing-image-and-social-media">
                <div className="landing-personal-image">
                    <img src={IMAGE}/>
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
            </div>
            <div className="landing-text-description">
                <div className="landing-main-text">
                    <span>
                        {i18n.t("Hi, my name is")}&nbsp;
                        <span className="span-with-color">Felipe!</span>
                    </span>            
                </div>
                <div className="landing-sub-text">
                    <p> 
                        {i18n.t("home_description_a")}&nbsp; 
                        <span className="span-with-color"> product manager </span> 
                        &nbsp;{i18n.t("home_description_and_former_developer_who_seeks_to")}&nbsp;
                        <span className="span-with-color"> {i18n.t("home_description_understand_and_solve_problems")} </span> 
                        &nbsp;{i18n.t("home_description_by_transforming_user_pain_points_into")}&nbsp;
                        <span className="span-with-color"> {i18n.t("home_description_business_opportunities")} </span> 
                        &nbsp;{i18n.t("home_description_and_in")}&nbsp;
                        <span className="span-with-color"> {i18n.t("home_description_great_products")}. </span>
                        </p>
                </div> 
            </div>
        </div>
    )
    
}

export default Home;