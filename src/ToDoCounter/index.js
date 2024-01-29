
import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './TituloContador.css'


function ToDoCounter(){

  const {completedToDos,
        lenghtToDos,
        i,}=React.useContext(ToDoContext)

    return(
      <div className="contenedor">
        <h1>Tus tasks</h1>
        <p className='grupo1'>{i ? "Felicidades, los completaste todos" : 
        `Completaste ${completedToDos} ToDos de ${lenghtToDos} restantes`}</p>
        
      </div>
    )
  }

  export {ToDoCounter};