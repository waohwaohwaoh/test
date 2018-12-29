import React, { Component } from 'react';
import '../../App.css';
import './aPerson.css';
export default props => (
        <a className={props.class} href={props.href} onClick={props.click}>{props.value}</a>
    )