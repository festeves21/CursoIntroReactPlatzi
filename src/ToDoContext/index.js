import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const ToDoContext =React.createContext();

/*

const defaultToDos = [
    { texto: 'Cortar Cebolla', completed: false},
    { texto: 'Terminar Curso de Platzi React Intro', completed: true},
    { texto: 'Terminar Curso de Platzi React Avanzado', completed: false},
    { texto: 'Terminar Curso de Platzi Java', completed: true},
    { texto: 'Terminar Curso de Platzi C#', completed: false}
]

let valor = JSON.stringify( defaultToDos)
localStorage.setItem('ToDos_V1', valor)
*/
function ToDoProvider({children}){

    const { item:toDos, saveItem: saveToDoS, loading, error } = useLocalStorage('ToDos_V1',[])
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const completeToDos = toDos.filter( todo=> !!todo.completed).length
    const totalToDos = toDos.length;
  
    const searchedToDos = toDos.filter( (toDo) => {
            const toDoText = toDo.texto.toLowerCase();
            const searchText = searchValue.toLowerCase()
            //console.log('Busqueda ' + searchText );
            return toDoText.includes(searchText);
        }      
    );
  
  
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

    const addToDo=(text) => {
        const newToDos = [...toDos];        
        newToDos.push({ texto: text,completed: false,});
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
                        openModal,
                        setOpenModal,
                        addToDo
                    }} >
            {children}
        </ToDoContext.Provider>
        )
}


export {ToDoContext, ToDoProvider}