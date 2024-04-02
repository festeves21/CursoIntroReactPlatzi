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
    { texto: 'Terminar Curso de Platzi React Avanzado', completed: false}

]

function App() {
  return (
    <>
    
      <ToDoCounter completed={16} total={25}/>
      <ToDoSearch/>
      <ToDoList>
        {defaultToDos.map(ToDo => (<ToDoItem key={ToDo.key} text={ToDo.texto} completed={ToDo.completed}  />))}
          
      </ToDoList>
      

      <CreateToDoButton/>

    </>
  );
}




export default App;
