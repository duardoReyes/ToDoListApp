import './ToDolist.css'

function ToDoList(props){
    return(
      <ul className="ToDoGrupo">
        {props.children}
      </ul>
    )
  }

  export {ToDoList};