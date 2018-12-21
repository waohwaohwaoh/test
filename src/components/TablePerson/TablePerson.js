import React, { Component } from 'react';
import '../../App.css';

export default props =>(
    <tr>
        <td>
            {props.lastName}
        </td>
        <td>
            {props.name}
        </td>
        <td>
            {props.patronymic}
        </td>
        <td>
            {props.telephone}
        </td>
        <td>
                <a className='button' onClick={props.onChangeTitle}> Информация</a>
        </td>
    </tr>
);