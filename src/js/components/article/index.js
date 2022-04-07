import React, {useEffect, useState, useRef} from 'react';
import {Artigo} from './styled';
import {Icon} from '@iconify/react';

const Article = props => {
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    useEffect(() => {
      fetch('http://localhost:3000/static/json/cars.json').then((response) => response.json()).then(setData);
    },[]);
    const left = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const right = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    if (!data || !data.length) return null;

    return(
        <Artigo>
            <div className="icone">
                <button onClick={left}>
                    <Icon icon="bi:chevron-left" className="left-icone"/>
                </button>
                <button onClick={right}>
                    <Icon icon="bi:chevron-right" className="right-icone"/>
                </button>
            </div>
            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const { id, name, year, speed, energy, people, image } = item;
                    return (
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="info">
                                <span className="nome">{name}</span>
                                <span className="dados"><Icon icon="bi:calendar2-date" className="info-icone"/> {year}</span>
                                <span className="dados"><Icon icon="fluent:top-speed-20-regular" className="info-icone"/> {speed}</span>
                                <span className="dados"><Icon icon="simple-line-icons:energy" className="info-icone"/> {energy}</span>
                                <span className="dados"><Icon icon="fluent:people-20-regular" className="info-icone"/> {people}</span>
                                <button className="botao">Ver carro</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Artigo>
    );
}

export default Article;