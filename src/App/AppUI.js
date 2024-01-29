import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ButtonCreateToDo } from '../ButtonCreateToDo';
import { Instrucciones } from '../Instrucciones';
import { Loading } from '../Loading';
import { ToDoContext } from '../ToDoContext';
import { Modal } from '../Modal';
import React from 'react';
import { FormularioToDo } from '../FormularioToDo';


function AppUI (){

    const {openModal,
       ToDos,
       userSearch,
       setUserSearch,
       SearchedValue,
       greenMark,
       onDelete,
       todosToDos,
       loading,
       error,
      } = React.useContext(ToDoContext)

    return (
        <>
           <div style={{ width: '90vw', height: '100vh' }}>  
             <ToDoCounter />
             <ToDoSearch
               userSearch={userSearch} setUserSearch={setUserSearch}/>
             <ToDoList>
                  {loading && <Loading/>}
                  {error && <p>Algo salió mal</p>}
                  {(!loading && ToDos.length===0) && <p>Crea tu primer ToDo!</p>}
                  {SearchedValue.map(ToDo=>(
                    <ToDoItem 
                          key={ToDo.text}
                          text={ToDo.text}
                          completed={ToDo.completed}
                          greenMark = {()=>greenMark(ToDo.text)}
                          revision = {todosToDos}
                          onDelete = {()=>onDelete(ToDo.text)}
                    />
                  ))}
             </ToDoList>
             <Instrucciones/>
             
             
            <ButtonCreateToDo/>
            {openModal && (
              <Modal>
                <FormularioToDo/>
              </Modal>
            )}
             
           
           </div>
        </>
      );

     
}

export {AppUI};