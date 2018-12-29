import React, { Component } from 'react';
import '../../App.css';
import PersonA from '../Button/aPerson';
import './Table.css';

class PersonRows extends Component{
    render () {
        const values=this.props.value;
        const children=this.props.children;
        const row=[];
        for(let key in values)
        {
            row.push(<td>{values[key]}</td>)
        }
                return(
             <tr>
                 {row}
                 <td>{children}</td>
             </tr>
        )}
}

 export default class PersonTable extends Component{
    render(){
        const headers=this.props.headers;
        const rows=this.props.rows.map((row,index)=>{
            return(
                <PersonRows
                    value={row}
                >
                    {React.cloneElement(this.props.children, { key: index })}
                </PersonRows>
                    )
        });
        return(
                    <table>
                        <thead>
                            {headers.map((head)=>
                                {
                                    return(
                                        <th>{head.headerContent}</th>
                                    )
                                }
                            )}
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </table>
                    )
    }


    }




