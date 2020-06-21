import React, { Component, useState, useEffect, useCallback } from 'react'

import './WorkCard.css';

const WorkCard = props => {

    return (
        <div className="work-card-container">
            <div className="work-rows-item">
                <span className="work-place"> {props.place}</span>
                <span className="work-period"> {props.period}</span>
            </div>
            <div className="work-column-item">
                <span className="work-jobs"> {props.children}</span>
            </div>
            
        </div>        
    )
}

export default WorkCard;