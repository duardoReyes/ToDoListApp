 
import './BotonStyle.css'
import './MejoraImagen.css'
import Imagen1 from './mejora.png'
import React from 'react'
import { ToDoContext } from '../ToDoContext'
import '../Modal/modalToDostyle.css'
import { FaPlus } from "react-icons/fa6";


function ButtonCreateToDo(){
    const { setOpenModal, openModal} = React.useContext(ToDoContext)
    // eslint-disable-next-line 
    const [sombra, setSombra] = React.useState(false)

    return(
    <>
        <button className= {!openModal?'button-label' : 'button-labelSombra'}
                onClick={()=>{setOpenModal(openModal => !openModal); setSombra(sombra => !sombra)}}
                >{!openModal?"Crea un ToDo":<FaPlus />}</button>

        <div className='contenedorImagen'>
            <img className='MejoraImagen' src={Imagen1} alt='Exito'/>
        </div>
    </>
    )
}

export {ButtonCreateToDo}