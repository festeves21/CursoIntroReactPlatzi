import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";


const ToDoContext =React.createContext();


function ToDoProvider({children}){

    const { item:toDos, saveItem: saveToDoS, loading, error } = useLocalStorage('ToDos_V1',[])
    const [searchValue, setSearchValue] = React.useState('');
    
    const completeToDos = toDos.filter( todo=> !!todo.completed).length
    const totalToDos = toDos.length;
  
    const searchedToDos = toDos.filter( toDo => toDo.texto.toUpperCase().includes(searchValue.toUpperCase()))
  
  
    const completeToDo = (text) => { 
      const newToDos = [...toDos];
      const todoIndex= newToDos.findIndex((todo)=> todo.texto === text);
      newToDos[todoIndex].completed = true;
      saveToDoS(newToDos);
    }
    
    const deleteToDo = (text) => { 
      const newToDos = [...toDos];
      const todoIndex= newToDos.findIndex((todo)=> todo.texto === text);
      newToDos.splice(todoIndex,1) ;
      saveToDoS(newToDos);
    }
    return ( 
        <ToDoContext.Provider value={{
                        loading,
                        error,
                        completeToDos,
                        totalToDos,
                        searchValue,
                        setSearchValue,
                        searchedToDos,
                        completeToDo,
                        deleteToDo,
                    }} >
            {children}
        </ToDoContext.Provider>
        )
}


export {ToDoContext, ToDoProvider}