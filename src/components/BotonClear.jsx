import '../stylesheets/BotonClear.css'

const BotonClear = (props) => (
    <div 
      className="boton-clear" 
      onClick={props.handleClick}>
        Clear
    </div>
)

export default BotonClear;