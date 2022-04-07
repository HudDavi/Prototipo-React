import {createGlobalStyle} from 'styled-components';

export const Reset = createGlobalStyle`
    *{
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
                box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background: ${({theme}) => theme.primary};
    }
`;