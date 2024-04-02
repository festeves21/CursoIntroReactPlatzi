import './ToDoItem.css'

function ToDoItem({text, completed}){
    return(

      <li className='ToDoItem'>
        <span className={`Icon Icon-check ${completed&&"Icon-check--active"}`}> V</span>
        <p className={`ToDoItem-p ${completed&&"ToDoItem-p--complete"}`}>{text}</p>
        <span className="Icon Icon-delete">X</span>
      </li>

    )
  }

  export {ToDoItem}