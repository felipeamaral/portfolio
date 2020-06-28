import React, { Component, useState, useEffect, useCallback } from 'react'

import './CertificationCard.css';

const CertificationCard = props => {
   
    return (
        <div className="certification-card-container">
            <div className="certification-preview">
                <img 
                    src={props.image}
                />
            </div>
            <div className="certification-desc-container">
                <span className="certification-name"> {props.course} </span>
                <div className="certification-extra-info">
                    <span> {props.school} </span>
                    <span> {props.period} </span>
                </div>
            </div>
        </div>        
    )
}

export default CertificationCard;