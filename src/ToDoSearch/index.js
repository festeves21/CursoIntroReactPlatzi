
import React from 'react';
import './ToDoSearch.css'

function ToDoSearch({searchValue,setSearchValue}){


    return(
            <input className="ToDoSearch" placeholder="Insertar To-Do" 
            value={searchValue}
                    onChange={(event)=>{
                      
                      setSearchValue(event.target.value);
                      console.log(event.target.value)
                    }}  
            />)
  }
  
  export {ToDoSearch};