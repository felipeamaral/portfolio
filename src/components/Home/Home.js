import React from 'react';
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
                        Hi, my name is&nbsp; 
                        <span className="span-with-color">Felipe!</span>
                    </span>            
                </div>
                <div className="landing-sub-text">
                    <p> A&nbsp; 
                        <span className="span-with-color"> product manager </span> 
                        &nbsp;and former developer who seeks to&nbsp;
                        <span className="span-with-color">understand and solve problems</span> 
                        &nbsp;by transforming user pain points into&nbsp;
                        <span className="span-with-color">business opportunities</span> 
                        &nbsp;and in&nbsp;
                        <span className="span-with-color">great products.</span>
                        </p>
                </div> 
            </div>
        </div>
    )
    
}

export default Home;