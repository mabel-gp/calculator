import './App.css'
import Boton from './components/Boton'
import Screen from './components/screen'
import BotonClear from './components/BotonClear'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  }

  return (
    <div className='App'>
        <div className='title-container'>
          <h1 className='title'>Calculator</h1>
        </div>
        <div className='calculator-container'>
          <Screen input={input}/>
          <div className='row'>
            <Boton handleClick={addInput}>1</Boton>
            <Boton handleClick={addInput}>2</Boton>
            <Boton handleClick={addInput}>3</Boton>
            <Boton handleClick={addInput}>+</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={addInput}>4</Boton>
            <Boton handleClick={addInput}>5</Boton>
            <Boton handleClick={addInput}>6</Boton>
            <Boton handleClick={addInput}>-</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={addInput}>7</Boton>
            <Boton handleClick={addInput}>8</Boton>
            <Boton handleClick={addInput}>9</Boton>
            <Boton handleClick={addInput}>*</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={addInput}>.</Boton>
            <Boton handleClick={addInput}>0</Boton>
            <Boton handleClick={addInput}>=</Boton>
            <Boton handleClick={addInput}>/</Boton>
          </div>
          <BotonClear/>
        </div>
    </div>
  )
}

export default App
