import logo from './platzi.webp';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

import React from 'react';

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
  const localToDos = localStorage.getItem('ToDos_V1');
  
  let parserToDos;

  if(!localToDos){
    localStorage.setItem('ToDos_V1',JSON.stringify([]));
    parserToDos=[]
  }else{
    console.log(JSON.parse(localToDos));
    parserToDos= JSON.parse(localToDos);
  }

  
  const [toDos, setToDos] = React.useState(parserToDos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completeToDos = toDos.filter( todo=> !!todo.completed).length
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter( toDo => toDo.texto.toUpperCase().includes(searchValue.toUpperCase()))

const saveToDoS = (newToDos)=>{
    localStorage.setItem('ToDos_V1',JSON.stringify(newToDos))
    setToDos(newToDos);
}

  const completeToDo = (text) => { 
    const newToDos = [...toDos];
    const todoIndex= newToDos.findIndex((todo)=> todo.texto == text);
    newToDos[todoIndex].completed = true;
    saveToDoS(newToDos);
  }
  
  const deleteToDo = (text) => { 
    const newToDos = [...toDos];
    const todoIndex= newToDos.findIndex((todo)=> todo.texto == text);
    newToDos.splice(todoIndex,1) ;
    saveToDoS(newToDos);
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
