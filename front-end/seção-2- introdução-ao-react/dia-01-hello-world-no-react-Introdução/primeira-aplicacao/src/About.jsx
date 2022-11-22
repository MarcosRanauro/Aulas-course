import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div className='div'>
              <h1>Marcos Ranauro</h1>
              <p>Sobre mim</p>
              <h2>Minhas Habilidades</h2>
              <ul className='list'>
                <li>React</li>
                <li>HTML</li>
                <li>JS</li>
                <li>CSS</li>
              </ul>
            </div>
        );
    }
}

export default About