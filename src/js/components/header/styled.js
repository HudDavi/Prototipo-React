import Styled from 'styled-components';

export const Cabecalho = Styled.header`
    width: 100%;
`;

export const Menu = Styled.menu`
    position: absolute;
    width: 100%;
    padding: 10px;
    .menu-icone{
        font-size: 30px;
        color: #fff;
    }
    @media(max-width:799px){
        .menu-icone{
            display: block;
        }
    }
    @media(min-width:800px){
        .menu-icone{
            display: none;
        }
    }
`;

export const Lista = Styled.ul`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    li{
        list-style: none;
        line-height: 30px;
        text-align: center;
        margin: auto 0;
    }
    a{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        color: #fff;
    }
    a:hover{
        text-decoration: underline;
    }
    .logo-icone{
        font-size: 50px;
        color: #fff;
    }
    .login-icone{
        font-size: 24px;
        color: #fff;
        margin: 0 0 -4px 30px;
    }
    @media(max-width:799px){
        background: ${({theme}) => theme.secondary};
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        display: ${({show}) => show ? 'block' : 'none'};
        position: fixed;
        height: 100%;
        width: 75%;
        z-index: 999;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 30px 0 0 25px;
        li{
            text-align: left;
            width: 100%;
            margin-top: 30px;
        }
        a{
            color: #000;
        }
        .logo-icone,
        .login-icone{
            color: #000;
        }
    }
    @media(min-width:800px){
        li{
            width: 19%;
        }
        .logo-icone
            width: 5%;
        }
    }
`;

export const Overlay = Styled.div`
    display: ${({show}) => show ? 'block' : 'none'};
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 998;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

export const Figure = Styled.figure`
    width: 100%;
    img{
        width: 100%;
    }
`;