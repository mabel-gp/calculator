import '../stylesheets/Boton.css'

function Boton(props) {

    const isOperator = value => {
      // Si el valor no es un # y no es signos (= o .), se considera un operador
      if(isNaN(value) && value != '.' && value != '='){
        return true;
      } else {
        return false;
      }
    };

    return (
        <div
          // La fx isOperator toma el valor {props.children} y dependiendo de eso se asigna la class operator o null
          className={`button-container ${isOperator(props.children) ? 'operator' : null}`.trimEnd()}>
         {/* Permite que el componente acepte múltiples hijos */}
         {props.children} 
        </div>
    );
}
  
export default Boton;