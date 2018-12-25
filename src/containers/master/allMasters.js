import React, { Component } from 'react';
import '../../App.css';
import FooterPage from '../../components/footer/footer';
import HeaderPage from '../../components/header/header';
import TablePerson from '../../components/TablePerson/TablePerson';
import Headline from '../../components/LabelText/Headline/Headline2'

export default class allMastersPage extends Component{

    render(){
        const person=[
            {
                name: 'Vasya',
                lastName: 'Petrov',
                patronymic: 'Genadevich',
                telephone: 79992533
            },
            {
                name: 'Panya',
                lastName: 'Zhilkov',
                patronymic: 'Andreevich',
                telephone: 79992533,
            },
            {   name: 'Andriy',
                lastName: 'Frolov',
                patronymic: 'Sergeevich',
                telephone: 79992533}
        ]
        const pageTitle='Список мастеров';
        return(
            <div>
                <HeaderPage/>
                <section className="main_section">

                    <Headline
                        text={<span className={'section_line_text'}>{pageTitle}</span>}
                        class={"section_line"}
                    />
                    <div className="section_layout">
                        <TablePerson
                            rows={person}
                        />
                    </div>
                </section>

                <FooterPage/>
            </div>
        )
    }
}