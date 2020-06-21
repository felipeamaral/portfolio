import React, { Component, useState, useEffect, useCallback } from 'react'

import './IconText.css';

import ICON_RESEARCH from './../../../assets/images/1x/research.png'
import ICON_DESIGN from './../../../assets/images/1x/ideate.png'
import ICON_BUILD from './../../../assets/images/1x/developer.png'
import ICON_REFINE from './../../../assets/images/1x/refine.png'



const IconText = props => {

    
    const ICONS = {
        "reasearch": ICON_RESEARCH,
        "ideate": ICON_DESIGN,
        "build": ICON_BUILD,
        "refine": ICON_REFINE,
    }

    return (
        <div className="icon-text-container">
            <div className='icon-text-img'>
                <img src={ICONS[props.icon]}/>
            </div>
            <div className='icon-text-title'>
                <span> {props.title} </span>
            </div>
            <div className='icon-text-text'>
                <span> {props.text} </span>
            </div>
            
        </div>
    )
}

export default IconText;