import React from "react";
import './FormularioToDoStyle.css'
import {ToDoContext} from '../ToDoContext'

function FormularioToDo(){

    const{  setOpenModal,
            addToDo,
            setI,
                         }=React.useContext(ToDoContext)
    
    const [newToDoValue, setNewToDoValue] = React.useState('')
    const onChange = (event)=>{
        setNewToDoValue(event.target.value)
                               }

    const onSubmit= (event)=>{
            setI(false);
            event.preventDefault(); 
            addToDo(newToDoValue);
            setOpenModal(false);
                              }
                    
    const onCancel = ()=>{
        setOpenModal(false)
                         }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea   value={newToDoValue}
                        onChange={onChange}
                        placeholder="Correr un maratón el proximo sábado">
            </textarea>
            <div className="FormButtonContainer">
                <button onClick={onCancel}
                        className="FormButtons FormButtons--Cancel">Cancelar</button>
                <button className="FormButtons FormButtons--Add">Añadir</button>
                
            </div>
        </form>
    );
}

export {FormularioToDo};