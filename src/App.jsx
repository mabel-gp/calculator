import './App.css'
import Boton from './components/Boton'

function App() {
  return (
    <div className='App'>
        <div className='title-container'>
          <h1 className='title'>Calculator</h1>
        </div>
        <div className='calculator-container'>
          <div className='row'></div>
            <Boton>1</Boton>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
        </div>
    </div>
     
  )
}

export default App
