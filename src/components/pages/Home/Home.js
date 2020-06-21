import React from 'react';
import i18n from './../../../../i18n'
import './Home.css';
import EducationCard from './../../commons/EducationCard/EducationCard';
import WorkCard from './../../commons/WorkCard/WorkCard';
import ContactForm from './../../commons/ContactForm/ContactForm';
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

    const goToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div className="container">
            <div className="landing-image-container">
                <div className="landing-personal-image">
                    <img src={IMAGE}/>
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
                <div className="landing-social-media">
                    <SocialMediaIconsReact icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,172,238,1)" iconSize="3" roundness="50%" url="https://twitter.com/felipea_amaral" size="24" />
                    <SocialMediaIconsReact icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,114,177,1)" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/felipeaamaral/" size="24" />
                    <SocialMediaIconsReact icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url="https://github.com/felipeamaral" size="24" />
                </div>
                <div className="container-with-color-yellow-1" />
                <div className="landing-sub-text">
                    {i18n.t("HOME_INTRODUCTION_DESCRIPTION")}&nbsp;
                </div>
            </div>
            <div className="about-me-container">
                <div id='about' className="about-me-title">
                    {i18n.t("header_about")}
                </div>
                <div className="about-me-text">
                    <p>
                        {i18n.t("about_me_description_1")}
                    </p>
                    <p>
                        {i18n.t("about_me_description_2")}
                    </p>
                    <p>
                        {i18n.t("about_me_description_3")}
                    </p>
                </div>
                <div className="container-with-color-blue-1" /> 
            </div>
            <div className="resume-container">
                <div id='resume' className="resume-title">
                    {i18n.t("header_resume")}
                </div>
                <div className="resume-work-title">
                    experiência profissional
                </div>
                <div className="resume-work-container">
                    <WorkCard 
                        place="PontoTel" 
                        period="jul/2015 - atual">
                            <span> Estagiário </span>
                            <span> Desenvolvedor </span>
                            <span> Tech Lead </span>
                            <span> Product Manager </span>

                    </WorkCard>
                    <WorkCard 
                        place="Opus Software" 
                        period="jan/2015 - jun/2015">
                            <span> Estagiário </span>
                    </WorkCard>
                </div>

                <div className="resume-education-title">
                    formação academica
                </div>
                <div className="resume-education-container">
                    <EducationCard 
                        course="Bel. em Ciências da Computação" 
                        school="ICMC-USP/São Carlos" 
                        period="2010-2015" />

                    <EducationCard 
                        course="CSF - Bsc in Computer Science" 
                        school="Queen Mary, University of London" 
                        period="2013-2014" />

                    <EducationCard 
                        course="Formação de Product Manager" 
                        school="PM3" 
                        period="2019" />

                    <EducationCard 
                        course="Formação em UX Design" 
                        school="Mergo UX" 
                        period="2019" />
                </div>
                <div className="container-with-color-yellow-2" />
            </div>
            <div className="portfolio-container">                
                <div id='portfolio' className="portfolio-title">
                    {i18n.t("header_projects")}
                </div>
                <div className="container-with-color-blue-2" />
            </div>
            <div className="contact-container"> 
                <div id='contact' className="contact-title">
                    {i18n.t("header_contact")}
                </div>
                <div className="contact-form">
                    em construção
                    {/* <ContactForm /> */}
                </div>
                <div className="back-to-top" onClick={goToTop}>
                    voltar para o topo
                </div>
            </div>
        </div>
    )
    
}

export default Home;