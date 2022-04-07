import React, {memo, useState} from 'react';
import {Cabecalho, Menu, Lista, Overlay, Figure} from './styled';
import {Icon} from '@iconify/react';

function Header(){
    const [show, setShow] = useState(false)
    const toggleMenu = () => {
      setShow(!show)
    }
    const fordMustang = require("../../../img/ford-mustang/ford-mustang.png");
    return(
        <Cabecalho>
            <Menu>
                <Icon icon="ant-design:menu-outlined" className="menu-icone" onClick={toggleMenu}/>
                <Lista show={show}>
                    <Icon icon="carbon:logo-delicious" className="logo-icone"/>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Tabela</a>
                    </li>
                    <li>
                        <a href="#">Fale conosco</a>
                    </li>
                    <li>
                        <a href="#">Entrar</a>
                        <Icon icon="ant-design:user-outlined" className="login-icone"/>
                    </li>
                </Lista>
            </Menu>
            <Figure>
                <img src={fordMustang} alt=""/>
            </Figure>
            <Overlay show={show} onClick={toggleMenu}/>
        </Cabecalho>
    );
}

export default memo(Header);