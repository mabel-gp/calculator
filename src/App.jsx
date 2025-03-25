import './App.css'
import Boton from './components/Boton'
import Screen from './components/screen'

function App() {
  return (
    <div className='App'>
        <div className='title-container'>
          <h1 className='title'>Calculator</h1>
        </div>
        <div className='calculator-container'>
          <Screen/>
          <div className='row'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className='row'>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className='row'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>*</Boton>
          </div>
          <div className='row'>
            <Boton>.</Boton>
            <Boton>0</Boton>
            <Boton>=</Boton>
            <Boton>/</Boton>
          </div>
        </div>
    </div>
     
  )
}

export default App
