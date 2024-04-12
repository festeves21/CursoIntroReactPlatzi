
import React from 'react';
import './ToDoSearch.css'
import { ToDoContext } from '../ToDoContext';

function ToDoSearch(){

        const {searchValue,setSearchValue}  = React.useContext(ToDoContext);
    return(
            <input className="ToDoSearch" placeholder="Insertar To-Do" 
            v   alue={searchValue}
                    onChange={(event)=>{
                      
                      setSearchValue(event.target.value);
                      //console.log(event.target.value)
                    }}  
            />)
  }
  
  export {ToDoSearch};