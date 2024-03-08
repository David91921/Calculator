import React from "react";
import '../style-sheet/Boton.css'


function Boton (props) {

  const esOperador = (valor) =>{
    return isNaN(valor) && (valor != '.') && (valor != '=')
  };

  return(
    <div
      className={`contenedor-boton ${esOperador (props.children) ? 'operador' : ''}`.trimEnd()}>
      {props.children}
    </div>
  )
}

export default Boton;