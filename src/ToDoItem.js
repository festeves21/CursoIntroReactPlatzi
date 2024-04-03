import './ToDoItem.css'
import {CompletedIcon} from './CompletedIcon'
import { DeleteIcon } from './DeleteIcon'

function ToDoItem({text, completed,onCompleted,onDelete}){
    return(

      <li className='ToDoItem'>
       {/*  <span className={`Icon Icon-check ${completed&&"Icon-check--active"}`}
                onClick={onCompleted}> V</span> */}
                 
        <CompletedIcon onClick={onCompleted}/>
        <p className={`ToDoItem-p ${completed&&"ToDoItem-p--complete"}`}>{text}</p>
        {/* <span className="Icon Icon-delete"
              onClick={onDelete}>X</span> */}
       <DeleteIcon onClick={onDelete}/>
      </li>

    )
  }

  export {ToDoItem}