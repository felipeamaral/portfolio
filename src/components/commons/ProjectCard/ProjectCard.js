import React, { Component, useState, useEffect, useCallback } from 'react'

import './ProjectCard.css';

import { SocialMediaIconsReact } from 'social-media-icons-react';

const ProjectCard = props => {
    let github = null;
    let figma = null;
    let medium = null;
    let internet = null;


    if (props.github) {
        github = (
            <SocialMediaIconsReact icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url={props.github} size="32"/>
        )
    }

    if (props.figma) {
        figma = (
            <SocialMediaIconsReact icon="sketch" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url={props.figma} size="32"/>
        )
    }

    if (props.medium) {
        medium = (
            <SocialMediaIconsReact icon="medium" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url={props.medium} size="32"/>
        )
    }

    if (props.internet) {
        internet = (
            <SocialMediaIconsReact icon="web" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,62,80,1)" iconSize="3" roundness="50%" url={props.github} size="32"/>
        )
    }

    return (
        <div className="project-card-container">
            <div className="project-preview">
                <img 
                    src={props.image}
                />
            </div>
            <div className="project-name">
                <span> {props.projectName} </span>
            </div>
            <div className="project-source">
                {medium}    
                {internet}    
                {figma}    
                {github}    
            </div>


        </div>        
    )
}

export default ProjectCard;