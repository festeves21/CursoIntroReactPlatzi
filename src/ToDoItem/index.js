import './ToDoItem.css'
import {CompletedIcon} from '../ToDoIcon/CompletedIcon'
import { DeleteIcon } from '../ToDoIcon/DeleteIcon'

function ToDoItem( props){
    return(

      <li className='ToDoItem'>
       {/*  <span className={`Icon Icon-check ${completed&&"Icon-check--active"}`}
                onClick={onCompleted}> V</span> */}
                 
        <CompletedIcon completed={props.completed} onCompleted={props.onCompleted}/>
        <p className={`ToDoItem-p ${props.completed&&"ToDoItem-p--complete"}`}>{props.text}</p>
        {/* <span className="Icon Icon-delete"
              onClick={onDelete}>X</span> */}
       <DeleteIcon onDelete={props.onDelete}/>
      </li>

    )
  }

  export {ToDoItem}