import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { ToDoContext } from '../ToDoContext';
import React from 'react';


function AppUI(){


  const { loading,
    error,
    searchedToDos
     ,completeToDo
     ,deleteToDo} = React.useContext(ToDoContext)
    return(<>
      <ToDoCounter /* completed={completeToDos} total={totalToDos} */  />
      <ToDoSearch /* searchValue={searchValue}  setSearchValue={setSearchValue}  */ />

              <ToDoList>
              { loading && <p>
                                <ToDosLoading/>
                                <ToDosLoading/>
                                <ToDosLoading/>
                              </p>}

              { error && <p><ToDosError/></p>}

              {  (!loading && searchedToDos.length === 0 ) && <p><EmptyToDos /></p>}


              {searchedToDos.map(ToDo => (<ToDoItem key={ToDo.texto} 
                                                    text={ToDo.texto} 
                                                    completed={ToDo.completed}
                                                    onCompleted={ ()=> completeToDo(ToDo.texto) } 
                                                    onDelete  = {()=> deleteToDo(ToDo.texto)}
                                          />))}
                
              </ToDoList>





        <CreateToDoButton/>

      </>);

}

export {AppUI}