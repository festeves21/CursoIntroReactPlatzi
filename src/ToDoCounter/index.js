import React from 'react';
import './ToDoCounter.css'
import { ToDoContext } from '../ToDoContext';

function ToDoCounter(){

  const {completeToDos,totalToDos}  = React.useContext(ToDoContext);

    return(<h1 className='ToDoCounter'>Has completado <span>{completeToDos}</span> de <span>{totalToDos}</span> To-Do</h1>)
  }
  
  export {ToDoCounter};