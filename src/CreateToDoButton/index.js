import './CreateToDoButton.css'

function CreateToDoButton(){
    return(
      <button className='CreateToDoButton' onClick={()=>{ console.log('Hola')}}>+</button>
    )
  }

  export {CreateToDoButton}