import React, { Component } from 'react';
import '../../App.css';
import FooterPage from '../../components/Footer/footer';
import HeaderPage from '../../components/Header/header';
import ImagePerson from '../../components/Image/Image';
import Headline from '../../components/LabelText/Headline/Headline2';
import ParagraphPerson from '../../components/Paragraph/paragraphPerson';
import Button from '../../components/Button/aPerson';
import UlPerson from '../../components/Ul/UlPerson';
import avatar from '../../img/mbm-13-fileminimizer.HUXCm.jpg'
import work1 from '../../img/dsc02296f.Nn0oe.jpg';
import work2 from '../../img/dsc_0793.8sUGP.jpg';
import work3 from '../../img/dsc_0987-5.IxGpu.jpg';

export default class oneMasterPage extends Component{

    render(){
        const pageTitle='Василий';
        const education=['Базовый курс барберинга "Барбер с нуля"','Семинар "Бритье и оформление бороды','Семинар "Бархатный Фэйд"'];
        const blockquote='Хорошая борода скрывает не только недостатки лица, но и недостатки фигуры.';
        const works=[work1,work2,work3];
        return(
            <div>
                <HeaderPage/>
                <section className="main_section">
                    <Headline
                        text={<span className={'section_line_text'}>{pageTitle}</span>}
                        class={"section_line"}
                    />
                    <div className="infoAboutMaster">
                        <div className="infoLeft">
                            <ImagePerson src={avatar}/>
                            <ParagraphPerson class={"monolog"} value={blockquote}/>
                            <Button value={'Записаться'} class="button"/>
                        </div>
                        <div className="infoRight">
                            <div>
                                <h3>Образование</h3>
                                <UlPerson
                                    value={education}
                                />

                            </div>
                            <h3>Примеры работ</h3>
                            <div className="workMaster">
                                {works.map((work)=>{
                                        return(
                                            <ImagePerson
                                                src={work}
                                            />
                                        )
                                    }
                                )
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <FooterPage/>
            </div>

        )
    }
}