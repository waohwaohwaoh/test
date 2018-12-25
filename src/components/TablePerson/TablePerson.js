import React, { Component } from 'react';
import '../../App.css';
import PersonA from '../Button/aPerson';

class PersonRows extends Component{

    render () {
            const {name,lastName,patronymic,telephone}=this.props.value;
        return(
             <tr>
                 <td>{name}</td>
                 <td>{lastName}</td>
                 <td>{patronymic}</td>
                 <td>{telephone}</td>
                 <td>
                     <PersonA
                        value="Информация"
                        class="button"
                        href=""
                    />
                 </td>
             </tr>
        )}
}

 export default class PersonTable extends Component{
    render(){
    const rows= this.props.rows.map((row,index)=>{
        return(
            <PersonRows
                key={index}
                value={row}
            />
        )})
        return(
            <table>
                <thead>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Телефон</th>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>

                )

    }
}



