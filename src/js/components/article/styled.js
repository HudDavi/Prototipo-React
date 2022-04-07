import Styled from 'styled-components';

export const Artigo = Styled.article`
    width: 100%;
    .carousel{
        display: flex;
        scroll-behavior: smooth;
        overflow-x: scroll;
        width: 90%;
        margin: 15% auto;
    }
    .carousel::-webkit-scrollbar{
        display: none;
    }
    .item{
        margin: 0 5%;
        flex: none;
    }
    img{
        width: 100%;
    }
    .info{
        border: 1px solid #000;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        height: 350px;
        padding: 5%;
    }
    span{
        display: block;
        text-align: center;
        color: #1e1e1e;
        padding: 5px 5%;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .nome{
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 400;
    }
    .dados{
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
    }
    .botao{
        display: block;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
    .info-icone{
        font-size: 25px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .icone{
        position: absolute;
        width: 100%;
        text-align: center;
    }
    .icone button{
        display: block;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .left-icone,
    .right-icone{
        position: absolute;
        font-size: 50px;
        margin: auto 0;
    }
    .left-icone{
        left: 0;
    }
    .right-icone{
        right: 0;
    }
    @media(max-width: 499px){
        .item{
            width: 90%;
        }
        .botao{
            width: 70%;
            padding: 10px 0;
            margin: 0 15%;
        }
    }
    @media(min-width: 500px) and (max-width: 799px){
        .item{
            width: 40%;
        }
        .botao{
            width: 80%;
            padding: 10px 0;
            margin: 0 10%;
        }
    }
    @media(min-width: 800px){
        .item{
            width: 23.33%;
        }
        .botao{
            width: 90%;
            padding: 15px 0;
            margin: 0 5%;
        }
    }
`;