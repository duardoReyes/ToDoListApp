import { ToDoProvider } from '../ToDoContext';
import { AppUI } from './AppUI';
import React from 'react';

function App() {
  return(
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  )


  /*const defaultToDos = [
{text:'Pasear al gato', completed:true}, 
{text:'Ir a correr', completed:false}, 
{text:'Tomar medicina', completed:false}, 
{text:'Tomar café', completed:true}, 
{text:'Ir al cine', completed:false}, 
{text:'Comprar flores', completed:true}
];


  localStorage.setItem('ToDosv1', JSON.stringify(defaultToDos))
localStorage.removeItem('ToDosv1');
*/


}





export default App;
