import React, { Component } from 'react';
import '../../App.css';
import Image from '../Image/Image';
import Button from '../Button/aPerson';
import logo from '../../img/logo.svg';

class pageHeader extends Component{
    state={
        linkText:['Главная','Мастера','Контакты','Вход']
    }
    render(){
        const linkText=this.state.linkText;
        return(
            <header className="header">
                <nav className="nav_layout_header">
                    <div className="header_item header_logo">
                        <Image
                            src={logo}
                        />
                    </div>
                    {linkText.map((text)=>{
                        return(
                            <div className="header_item header_button">
                                <Button
                                    value={text}
                                />

                            </div>
                        )
                    })}

                </nav>
            </header>
        )
    }
}
export default pageHeader;

