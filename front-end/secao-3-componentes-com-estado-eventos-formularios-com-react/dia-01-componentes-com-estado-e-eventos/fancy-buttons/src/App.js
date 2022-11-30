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
      numeroClicksThree: 0
    }
  }

  clickOne () {
    console.log('Click 1');
    this.setState((estadoAnterior) => ({
      numeroClicksOne: estadoAnterior.numeroClicksOne + 1
    }))
  }
  
  clickTwo () {
    console.log('Click 2');
    this.setState((estadoAnterior2) => ({
      numeroClicksTwo: estadoAnterior2.numeroClicksTwo + 1
    }))
  }
  
  clickThree () {
    console.log('Click 3');
    this.setState((estadoAnterior3) => ({
      numeroClicksThree: estadoAnterior3.numeroClicksThree + 1
    }))
  }
  //! Função com constructor  🔼  🔼 

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
    return (
      //! Com função fora da class
      // <div>
      //   <button onClick={clickOne}>Botão 1</button>
      //   <button onClick={clickTwo}>Botão 2</button>
      //   <button onClick={clickThree}>Botão 3</button>
      // </div>,

      //! Com função dentro da class usando This.
      <div>
        <button onClick={this.clickOne}>{this.state.numeroClicksOne}</button>
        <button onClick={this.clickTwo}>{this.state.numeroClicksTwo}</button>
        <button onClick={this.clickThree}>{this.state.numeroClicksThree}</button>
      </div>
    );
  }
}

export default App;
