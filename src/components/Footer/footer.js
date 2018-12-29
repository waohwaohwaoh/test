import React, { Component } from 'react';
import '../../App.css';
import Paragraph from '../Paragraph/paragraphPerson';
import Button from '..//Button/aPerson';
import Image from '../Image/Image';
import facebook from '../../img/facebook.svg';
import insta from '../../img/instagram.svg';
import vk from '../../img/vk.svg';





 class pageFooter extends Component {

    state={
        info:['Барбершоп "Бородинский"','Адрес: г.Санкт-Петербург, ул. б.Конюшечная, д.19/8','Телефон: +7 (495)666-02-66']
    }


    render(){
    const imageSrc=[facebook,insta,vk];
    const information=this.state.info;

        return(
            <footer className="footer">
                <nav className="nav_layout_footer">
                    <div className="footer_section info">
                        {
                            information.map((info)=>{
                            return(
                                <Paragraph
                                    value={info.toString()}
                                />


                            )
                        })
                        }
                        <Button
                            value={'Как нас найти'}
                        />

                    </div>
                    <div className="footer_section ">
                        <div>
                            <h2>Давай дружить</h2>
                        </div>
                        <div className="link">

                                {imageSrc.map((src)=>{
                                return(
                                    <div className="link_img">
                                        <Button
                                            value={<Image
                                                src={src}
                                            />}
                                        />


                                    </div>
                                )
                                }
                                )}
                        </div>
                    </div>
                    <div className="footer_section">
                        <Paragraph
                            value={'Создано: №№№'}
                        />
                    </div>
                </nav>
            </footer>
        )
    }
}
export default pageFooter;
