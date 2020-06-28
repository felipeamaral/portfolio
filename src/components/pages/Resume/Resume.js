import React from 'react';
import './Resume.css';
import './../../commons/EducationCard/EducationCard'
import i18n from '../../../../i18n'
import EducationCard from './../../commons/EducationCard/EducationCard';
import WorkCard from './../../commons/WorkCard/WorkCard';
import CertificationCard from './../../commons/CertificationCard/CertificationCard';

const Resume = props => {

    return (
        <div id="resume" className="resume-container">
            <div className="resume-title-bg"/>   
            <div className="resume-title-text">
                <span>{i18n.t("resume_section_resume")}</span>
            </div>  
            
            <div className="resume-content-container">
                <div className="resume-bg-yellow"/>
                <div className="resume-bg-blue"/>

                <div className="resume-education">
                    <span className="education-title">formação academica</span>
                    <div className="education-container">
                        <EducationCard 
                            course="Bel em ciências da computação" 
                            school="ICMC-USP/São Carlos" 
                            period="2010-2015" 
                        />
                        
                        <EducationCard 
                            course="CSF - Bsc Computer Science" 
                            school="Queen Mary, University of London" 
                            period="2013-2014" 
                        />

                    </div>
                </div>
                <div className="resume-work">
                    <span className="work-title">experiência profissional</span>
                    <div className="work-container">
                        <WorkCard 
                                place="PontoTel" 
                                period="06/2015 - atual" 
                        >
                            Estágiario
                            Desenvolvedor
                            Tech Lead
                            Product Manager
                        </WorkCard>
                        <WorkCard 
                                place="Opus Software" 
                                period="01/2015 - 06/2015" 
                        >
                            Estágiario
                        </WorkCard>
                    
                    </div>
                </div>
                <div className="resume-skills">
                    <span className="skills-title">habilidades</span>
                </div>
                <div className="resume-certification">
                    <span className="certification-title">certificados</span>
                    <div className="certification-container">
                        <CertificationCard 
                            course="Formação de Product Manager"
                            school="PM3"
                            period="2019"
                        />
                        <CertificationCard 
                            course="Formação em UX Design"
                            school="Mergo UX"
                            period="2019"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;