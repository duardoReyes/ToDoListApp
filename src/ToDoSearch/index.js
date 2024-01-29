import './BuscadorStyle.css'
import React from 'react';

function ToDoSearch({userSearch, setUserSearch}){
  
    return(
      <input placeholder="Buscador..." className='grupo2' value={userSearch}
      onChange={
        (dinosaurio)=>setUserSearch(dinosaurio.target.value)
      }
      />
    )
  }

  export {ToDoSearch};