function Boton(props) {

    const isOperator = value => {
      if(isNaN(value) && value != '.' && value != '='){
        return true;
      } else {
        return false;
      }
    };

    return (
        <div
          className={`button-contenedor ${isOperator(props.children) ? 'operator' : null}`}>
         {/* Permite que el componente acepte múltiples hijos */}
         {props.children} 
        </div>
    );
}
  
export default Boton;