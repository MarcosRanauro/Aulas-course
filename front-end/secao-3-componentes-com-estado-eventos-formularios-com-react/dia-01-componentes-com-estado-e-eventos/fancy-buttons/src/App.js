import './App.css';
import React from 'react';

// function clickOne() {
//   console.log('Click 1');
// }

// function clickTwo() {
//   console.log('Click 2');
// }

// function clickThree() {
//   console.log('Click 3');
// }


class App extends React.Component {
  //! Função com constructor   🔽   🔽 
  constructor() {
    super();
    this.clickOne = this.clickOne.bind(this);
    this.clickTwo = this.clickTwo.bind(this);
    this.clickThree = this.clickThree.bind(this);
    //! Implementando o state e somando as vezes clicadas no botão.
    this.state = {
      numeroClicksOne: 0,
      numeroClicksTwo: 0,
      numeroClicksThree: 0,
    }
  }

  clickOne () {
    const { numeroClicksOne } = this.state;
    console.log('Click 1');
    this.setState((estadoAnterior) => ({
      numeroClicksOne: estadoAnterior.numeroClicksOne + 1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(numeroClicksOne)}`);
    });
  }
  
  clickTwo () {
    const { numeroClicksTwo } = this.state;
    console.log('Click 2');
    this.setState((estadoAnterior2) => ({
      numeroClicksTwo: estadoAnterior2.numeroClicksTwo + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(numeroClicksTwo)}`);
    })
  }
  
  clickThree () {
    const { numeroClicksThree } = this.state;
    console.log('Click 3');
    this.setState((estadoAnterior3) => ({
      numeroClicksThree: estadoAnterior3.numeroClicksThree + 1
    }), () => {
      console.log(this.getButtonColor(numeroClicksThree));
    })
  }
  //! Função com constructor  🔼  🔼 

  getButtonColor (num) {
    return num % 2 === 1 ? 'green' : 'white'
  }

  //! Usando a função com arrow functions sem o constructor declarado 🔽 🔽 
  // clickOne = () => {
  //   console.log('Click 1');
  // }
  
  // clickTwo = () => {
  //   console.log('Click 2');
  // }
  
  // clickThree = () => {
  //   console.log('Click 3');
  // }


  render() {
    const { clickOne, clickTwo, clickThree } = this.state;
    const { numeroClicksOne, numeroClicksTwo, numeroClicksThree } = this.state;
    return (
      //! Com função fora da class
      // <div>
      //   <button onClick={clickOne}>Botão 1</button>
      //   <button onClick={clickTwo}>Botão 2</button>
      //   <button onClick={clickThree}>Botão 3</button>
      // </div>,

      //! Com função dentro da class usando This.
      <div>
        <button
          type="button"
          onClick={this.clickOne}
          style={ { backgroundColor: this.getButtonColor(clickOne) } }
        >
          {`Botão 1 ${numeroClicksOne}`};
        </button>

        <button
          type="button"
          onClick={this.clickTwo}
          style={ { backgroundColor: this.getButtonColor(clickTwo) } }
        >
          {`Botão 1 ${numeroClicksTwo}`};
        </button>

        <button
          type="button"
          onClick={this.clickThree}
          style={ { backgroundColor: this.getButtonColor(clickThree) } }
        >
          {`Botão 1 ${numeroClicksThree}`};
        </button>
      </div>
    );
  }
}

export default App;
