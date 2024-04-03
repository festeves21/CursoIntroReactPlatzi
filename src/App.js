import logo from './platzi.webp';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

import React from 'react';

const defaultToDos = [
    { texto: 'Cortar Cebolla', completed: false},
    { texto: 'Terminar Curso de Platzi React Intro', completed: true},
    { texto: 'Terminar Curso de Platzi React Avanzado', completed: false},
    { texto: 'Terminar Curso de Platzi Java', completed: true},
    { texto: 'Terminar Curso de Platzi C#', completed: false}
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completeToDos = toDos.filter( todo=> !!todo.completed).length
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter( toDo => toDo.texto.toUpperCase().includes(searchValue.toUpperCase()))

  const completeToDo = (text) => { 
    const newToDos = [...toDos];
    const todoIndex= newToDos.findIndex((todo)=> todo.texto == text);
    newToDos[todoIndex].completed = true;
    setToDos(newToDos);
  }
  
  const deleteToDo = (text) => { 
    const newToDos = [...toDos];
    const todoIndex= newToDos.findIndex((todo)=> todo.texto == text);
    newToDos.splice(todoIndex,1) ;
    setToDos(newToDos);
  }

  return (
    <>
    
      <ToDoCounter completed={completeToDos} total={totalToDos}/>
      <ToDoSearch searchValue={searchValue}  setSearchValue={setSearchValue}/>
      <ToDoList>
        {searchedToDos.map(ToDo => (<ToDoItem key={ToDo.texto} 
                                              text={ToDo.texto} 
                                              completed={ToDo.completed}
                                              onCompleted={ ()=> completeToDo(ToDo.texto) } 
                                              onDelete  = {()=> deleteToDo(ToDo.texto)}
                                     />))}
          
      </ToDoList>
      

      <CreateToDoButton/>

    </>
  );
}




export default App;
