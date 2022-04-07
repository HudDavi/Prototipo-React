import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './js/app';
import {ThemeProvider} from 'styled-components';

const theme = {
    primary: '#e5e5e5',
    secondary: '#ffffff'
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ThemeProvider theme={{...theme}}>
        <App tab="home"/>
    </ThemeProvider>
);