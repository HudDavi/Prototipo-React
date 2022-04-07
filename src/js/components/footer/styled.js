import Styled from 'styled-components';

export const Rodape = Styled.footer`
    width: 100%;
    figure{
        position: relative;
        color: #fff;
        width: 100%;
    }
    img{
        display: block;
        width: 100%;
    }
    figcaption{
        position: absolute;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        text-align: right;
        height: 100%;
    }
    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
    div{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }
    button{
        background: transparent;
        border: 1px solid #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
    }
    @media(min-width: 0px) and (max-width: 399px){
        figcaption{
            width: 100%;
            height: auto;
            top: 0;
            right: 0;
            padding: 10px;
        }
        h1{
            font-size: 20px;
        }
        div{
            font-size: 12px;
            line-height: 20px;
            margin: 5px 0;
        }
        button{
            font-size: 12px;
            padding: 5px 50px;
        }
    }
    @media(min-width: 400px) and (max-width: 499px){
        figcaption{
            width: 100%;
            height: auto;
            top: 0;
            right: 0;
            padding: 15px;
        }
        h1{
            font-size: 24px;
        }
        div{
            font-size: 16px;
            line-height: 25px;
            margin: 10px 0;
        }
        button{
            font-size: 16px;
            padding: 10px 70px;
        }
    }
    @media(min-width: 500px) and (max-width: 599px){
        figcaption{
            width: 100%;
            height: auto;
            top: 0;
            right: 0;
            padding: 20px;
        }
        h1{
            font-size: 24px;
        }
        div{
            font-size: 16px;
            line-height: 30px;
            margin: 15px 0;
        }
        button{
            font-size: 16px;
            padding: 15px 80px;
        }
    }
    @media(min-width: 600px) and (max-width: 699px){
        figcaption{
            width: 100%;
            height: auto;
            top: 0;
            right: 0;
            padding: 25px;
        }
        h1{
            font-size: 24px;
        }
        div{
            font-size: 16px;
            line-height: 30px;
            margin: 15px 0;
        }
        button{
            font-size: 16px;
            padding: 15px 90px;
        }
    }
    @media(min-width: 700px) and (max-width: 779px){
        figcaption{
            width: 100%;
            height: auto;
            top: 0;
            right: 0;
            padding: 25px;
        }
        h1{
            font-size: 24px;
        }
        div{
            font-size: 16px;
            line-height: 35px;
            margin: 15px 0;
        }
        button{
            font-size: 16px;
            padding: 15px 100px;
        }
    }
    @media(max-width: 779px){
        figure img:nth-child(1){
            display: none;
        }
        figure img:nth-child(2){
            display: block;
        }
    }
    @media(min-width: 780px){
        figure img:nth-child(1){
            display: block;
        }
        figure img:nth-child(2){
            display: none;
        }
        figcaption{
            width: 55%;
            right: 0;
            bottom: 0;
        }
    }
    @media(min-width: 780px) and (max-width: 899px){
        figcaption{
            padding: 10px;
        }
        h1{
            font-size: 24px;
        }
        div{
            font-size: 16px;
            line-height: 35px;
            margin: 15px 0;
        }
        button{
            font-size: 16px;
            padding: 15px 100px;
        }
    }
    @media(min-width: 900px) and (max-width: 1099px){
        figcaption{
            padding: 20px;
        }
        h1{
            font-size: 32px;
        }
        div{
            font-size: 20px;
            line-height: 35px;
            margin: 15px 0;
        }
        button{
            font-size: 16px;
            padding: 15px 100px;
        }
    }
    @media(min-width: 1100px){
        figcaption{
            padding: 30px;
        }
        h1{
            font-size: 56px;
        }
        div{
            font-size: 20px;
            line-height: 35px;
            margin: 20px 0;
        }
        button{
            font-size: 16px;
            padding: 15px 100px;
        }
    }
`;