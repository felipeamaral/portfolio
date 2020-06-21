import React, { Component, useState, useEffect, useCallback } from 'react'

import './EducationCard.css';

const EducationCard = props => {

    return (
        <div className="card-container">
            <span className="course"> {props.course}</span>
            <span className="school"> {props.school}</span>
            <span className="period"> {props.period}</span>
        </div>        
    )
}

export default EducationCard;