import React from 'react';
import './Projects.css';
import i18n from './../../../i18n'

const Projects = props => {

    return (
        <div className="page-section-container">
            <div className="page-section">
                <div className="page-section-title">
                    <h3>&nbsp;{i18n.t("project_section_project")}&nbsp;&nbsp;</h3>
                </div>
                <div className="page-section-text">
                    {/* <p>{i18n.t("ABOUT_PAGE_SECTION_ABOUT")}</p> */}
                    <p>...</p>
                </div>     
            </div>
        </div>
    )
    
}

export default Projects;