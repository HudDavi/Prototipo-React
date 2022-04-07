import React from 'react';
import {Rodape} from './styled';

export default function Footer(){
    const fordMustang1 = require("../../../img/ford-mustang/ford-mustang2.png");
    const fordMustang2 = require("../../../img/ford-mustang/ford-mustang3.png");
    return(
        <Rodape>
            <figure>
                <img src={fordMustang1} alt=""/>
                <img src={fordMustang2} alt=""/>
                <figcaption>
                    <h1>Mustang</h1>
                    <div>
                        O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company.
                        O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair.
                        O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
                    </div>
                    <button>Ver carros</button>
                </figcaption>
            </figure>
        </Rodape>
    );
}