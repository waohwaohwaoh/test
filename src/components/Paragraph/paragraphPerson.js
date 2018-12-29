import React, { Component, PropTypes } from 'react';
import './paragraphPerson.css';

export default class paragraphPerson extends Component{

    render(){
        return(
            <p className={this.props.class}>{this.props.value}</p>
        )
    }
}



