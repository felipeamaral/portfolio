import React from 'react';
import './Projects.css';
import ProjectCard from './../../commons/ProjectCard/ProjectCard'
import i18n from '../../../../i18n'
import IMAGE from './../../../assets/images/portfolio-img.png';

const Projects = props => {

    return (
        <div id="portfolio" className="portfolio-container">
            <div className="portfolio-title-container">
                <div className="portfolio-title-bg">   
                    <div className="portfolio-title-text">
                        <span>{i18n.t("project_section_project")}</span>
                    </div>
                </div>
            </div>
            <div className="portfolio-content-container">
                <ProjectCard 
                    projectName="portfolio" 
                    github="https://github.com/felipeamaral/portfolioaa" 
                    internet="https://www.felipeaamaral.com/#/" 
                    figma="https://www.figma.com/file/qtwQGroj3T37odjLZt1b22/portfolio-v2?node-id=0%3A1" 
                    image={IMAGE} />

                <ProjectCard 
                    projectName="portfolio" 
                    github="https://github.com/felipeamaral/portfolioaa" 
                    internet="https://www.felipeaamaral.com/#/" 
                    figma="https://www.figma.com/file/qtwQGroj3T37odjLZt1b22/portfolio-v2?node-id=0%3A1" 
                    image={IMAGE} />

                <ProjectCard 
                    projectName="portfolio" 
                    github="https://github.com/felipeamaral/portfolioaa" 
                    internet="https://www.felipeaamaral.com/#/" 
                    figma="https://www.figma.com/file/qtwQGroj3T37odjLZt1b22/portfolio-v2?node-id=0%3A1" 
                    image={IMAGE} />
            </div>
        </div>
    )
    
}

export default Projects;