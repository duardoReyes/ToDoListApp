import React from "react";

const ToDoContext = React.createContext();

    function ToDoProvider({children}) {

        
  const [ToDos, setToDos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  
  React.useEffect( ()=>{
    setTimeout(()=>{
      try{
        const localStorageToDos = localStorage.getItem('ToDosv1')
        let parsedToDos
      
        if(!localStorageToDos){
          parsedToDos = []
          localStorage.setItem('ToDosv1', JSON.stringify(parsedToDos))
          setToDos(parsedToDos)
        }
        else{
          parsedToDos=JSON.parse(localStorage.getItem('ToDosv1'))
          setToDos(parsedToDos)
        }
    
      setLoading(false)
        }
        catch(error){
          setLoading(false)
          setError(true)
        }
    }, 2000);  
  }, []);


  const [openModal, setOpenModal] = React.useState(false)

  const saveToDos= (newToDos) =>{
    localStorage.setItem('ToDosv1', JSON.stringify(newToDos))
    setToDos(newToDos) }

  const addToDo = (text)=>{
      const newToDos = [...ToDos];
      newToDos.push({
        text: text,
        completed: false,
                    });
      saveToDos(newToDos);
    }

  const greenMark = (text)=>{
    const newToDos = [...ToDos];
    const doneTask = newToDos.findIndex(ToDo=>ToDo.text === text)
    newToDos[doneTask].completed = true;
    saveToDos(newToDos);
  }

  const onDelete = (text)=>{
    const newToDos = [...ToDos];
    const toErase = newToDos.findIndex(ToDo=>ToDo.text === text);
    newToDos.splice(toErase,1);
    saveToDos(newToDos);
  }

  
  const [userSearch, setUserSearch] = React.useState('');



  
  const completedToDos = ToDos.reduce((contador, ToDo) => {
    return ToDo.completed ? contador + 1 : contador;
  }, 0);

  const SearchedValue = ToDos.filter(
    (ToDo)=>ToDo.text?.toLocaleLowerCase().includes(userSearch.toLocaleLowerCase())
  );

  const [i, setI] = React.useState(false);
  const todosToDos =()=>{ 
    const j = ToDos.every(ToDo => ToDo.completed)
    setI(j)  
    console.log(i)
  }

  const lenghtToDos = ToDos.length

        return(
            <ToDoContext.Provider value={{
                addToDo,
                lenghtToDos,  
                completedToDos,
                ToDos,
                userSearch,
                setUserSearch,
                SearchedValue,
                greenMark,
                onDelete,
                setI,
                i,
                todosToDos,
                loading,
                error,
                openModal,
                setOpenModal,
            }}>
                    {children}</ToDoContext.Provider>
        );
    }

export {ToDoContext, ToDoProvider};