import React, { Component, useState, useEffect, useCallback } from 'react'

import './Button.css';

const Button = props => {

    let style= 'styled-button-'+props.color + ' '+props.size

    return (
        <button className={style} onClick={props.click}>
            <span> {props.text} </span>
        </button>
    )
}

export default Button;