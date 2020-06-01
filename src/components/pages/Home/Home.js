import React from 'react';
import i18n from './../../../../i18n'
import './Home.css';
import Button from './../../commons/Button/Button.js';
import IconText from './../../commons/IconText/IconText';
import IMAGE from './../../../assets/images/foto_5.png';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import {
    useHistory,
  } from "react-router-dom";

const Home = props => {
    const history = useHistory()

    const goToAbout = () => {
        history.push('/about')
    }

    const goToResume = () => {
        history.push('/resume')
    }

    const goToPortfolio = () => {
        history.push('/projects')
    }

    return (
        <div className="landing-container">
            <div className="landing-page-1">
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
                            {i18n.t("HOME_INTRODUCTION_NAME")}&nbsp;
                        </span>            
                    </div>
                    <div className="landing-sub-title">
                        <span>
                            {i18n.t("HOME_INTRODUCTION_JOB")}&nbsp;
                        </span>
                    </div>
                    <div className="landing-split-line" />
                    <div className="landing-sub-text">
                        <p> 
                            {i18n.t("HOME_INTRODUCTION_DESCRIPTION")}&nbsp;
                        </p>
                    </div> 
                </div>
                <div className="pages-button-1">
                    <Button color="blue" size='md' text={i18n.t("HOME_ABOUT_BUTTON")} click={goToAbout}/>    
                </div>
            </div>
            <div className="landing-page-2">
                <h1 className="page-2-title"> {i18n.t("HOME_INTRODUCTION_PROCESS_TITLE")} </h1>
                <div className='page-2-icons-container'>
                    <IconText icon="reasearch" title={i18n.t("HOME_PROCESS_RESEARCH_TITLE")} text={i18n.t("HOME_PROCESS_RESEARCH_TEXT")} />
                    <IconText icon="ideate" title={i18n.t("HOME_PROCESS_DEFINE_TITLE")} text={i18n.t("HOME_PROCESS_DEFINE_TEXT")} />
                    <IconText icon="build" title={i18n.t("HOME_PROCESS_BUILD_TITLE")} text={i18n.t("HOME_PROCESS_BUILD_TEXT")} />
                    <IconText icon="refine" title={i18n.t("HOME_PROCESS_REFINE_TITLE")} text={i18n.t("HOME_PROCESS_REFINE_TEXT")} />
                    {/* <div>
                        <IconText icon="reasearch" title={i18n.t("HOME_PROCESS_RESEARCH_TITLE")} text={i18n.t("HOME_PROCESS_RESEARCH_TEXT")} />
                    </div>
                    <div>
                        <IconText icon="ideate" title={i18n.t("HOME_PROCESS_DEFINE_TITLE")} text={i18n.t("HOME_PROCESS_DEFINE_TEXT")} />
                    </div>
                    <div>
                        <IconText icon="build" title={i18n.t("HOME_PROCESS_BUILD_TITLE")} text={i18n.t("HOME_PROCESS_BUILD_TEXT")} />
                    </div>
                    <div>
                        <IconText icon="refine" title={i18n.t("HOME_PROCESS_REFINE_TITLE")} text={i18n.t("HOME_PROCESS_REFINE_TEXT")} />
                    </div> */}
                </div>
                <div className="pages-button-2">
                    <Button color="yellow" size='md' text={i18n.t("HOME_PROCESS_BUTTON")} click={goToPortfolio}/>    
                </div>
            </div>
            {/* <div className="landing-page-3">
                <h1 className="page-3-title"> Where do I work </h1>
                <div>
                    <p>...</p>
                </div>
                <div className="pages-button-3">
                        <Button color="blue" size='md' text="my resume" click={goToResume}/>    
                </div>
            </div> */}
        </div>
    )
    
}

export default Home;