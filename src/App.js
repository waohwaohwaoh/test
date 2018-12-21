import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TablePerson from './components/TablePerson/TablePerson';

class App extends Component {
    state = {
        persons: [
            {name: 'Vasya', lastName: 'Petrov', patronymic: 'Genadevich', telephone: 79992533},
            {name: 'Panya', lastName: 'Zhilkov', patronymic: 'Andreevich', telephone: 79992533},
            {name: 'Andriy', lastName: 'Frolov', patronymic: 'Sergeevich', telephone: 79992533}
        ],
        pageTitle: 'Список мастеров',
        flag: true,
        index: -1
    }

    changeFlag = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    changeTitleHeadle = (index) => {
        this.changeFlag();
        if (this.state.flag) {
            this.setState({
                pageTitle: 'список мастеров',
                index: index
            })
        }
        else {
            this.setState({
                index: index,
                pageTitle: this.state.persons[index].name
            })

        }
    }


    render() {
        return (
            <div>
                <h1 className="section_line"><span className="section_line_text">{this.state.pageTitle}</span></h1>
                <table>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Телефон</th>
                    {this.state.persons.map((person, index) => {
                        return (
                            <TablePerson
                                key={index}
                                name={person.name}
                                lastName={person.lastName}
                                patronymic={person.patronymic}
                                telephone={person.telephone}
                                onChangeTitle={this.changeTitleHeadle.bind(this, index)}
                            />
                        )
                    })}
                </table>
            </div>

        )
    }
}

export default App;
