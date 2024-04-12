
import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUi';
import logo from './platzi.webp';
/*const defaultToDos = [
    { texto: 'Cortar Cebolla', completed: false},
    { texto: 'Terminar Curso de Platzi React Intro', completed: true},
    { texto: 'Terminar Curso de Platzi React Avanzado', completed: false},
    { texto: 'Terminar Curso de Platzi Java', completed: true},
    { texto: 'Terminar Curso de Platzi C#', completed: false}
]

localStorage.setItem('ToDos_V1', JSON.stringify(defaultToDos));*/

//localStorage.setItem('ToDos_V1',defaultToDos);
//localStorage.removeItem('ToDos_V1');

function App() {
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
    <AppUI 
            loading={loading}
            error={error}
            completeToDos = {completeToDos }
            totalToDos= {totalToDos}
            searchValue= {searchValue}
            setSearchValue= {setSearchValue}
            searchedToDos= {searchedToDos}
            completeToDo= {completeToDo}
            deleteToDo= {deleteToDo}
      />
  );
}




export default App;
