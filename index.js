import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  aumentar = () =>{this.setState({
    contador: this.state.contador + 1}
    )}
    
  disminuir = () =>{this.setState({contador: this.state.contador -1})}

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick ={this.aumentar}>Click Me</button>
        <button onClick ={this.disminuir}>To Me</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
