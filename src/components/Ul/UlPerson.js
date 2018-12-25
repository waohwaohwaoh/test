import React, { Component } from 'react';
import '../../App.css';

export default class UlPerson extends Component {
    render (){
        const liList=this.props.value.map((li)=>{
            return(
            <li>{li}</li>
            )});
        return(
        <ul>
            <li>{liList}</li>
        </ul>
        )
}
}
