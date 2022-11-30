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
  }

  clickOne () {
    console.log('Click 1');
  }
  
  clickTwo () {
    console.log('Click 2');
  }
  
  clickThree () {
    console.log('Click 3');
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
        <button onClick={this.clickOne}>Botão 1</button>
        <button onClick={this.clickTwo}>Botão 2</button>
        <button onClick={this.clickThree}>Botão 3</button>
      </div>
    );
  }
}

export default App;
