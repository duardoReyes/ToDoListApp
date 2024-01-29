import './ToDoItemStyle.css'
import { FaCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";





function ToDoItem(props){
    return(
      <li className="ToDoIndividual">
        <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--completed"}`}
        onClick={() => { props.greenMark(); props.revision();} }>
           {props.completed && (
            <div className='contenedoriconcheckcompleted'>
                <div className='check1'><FaCheckCircle/></div>
                <div className='check2'><i className='radio'><ImRadioUnchecked/></i></div>
            </div>
        )}
        {!props.completed && <i className="Icon-check--pending"><ImRadioUnchecked/></i>}
        {/*{props.completed && <FaCheckCircle/> } <i className="Icon-pending"><ImRadioUnchecked/></i>*/}
    </span>

        <p className={`task ${props.completed && "task-completed"}`}>{props.text}</p> {/*Esto para cambiar de una clase en css a otra*/}
        
        <span className='Icon Icon-erase'
        onClick={props.onDelete}>
        </span>
      </li>
    )
  }
//🐢
  export {ToDoItem}