import React from "react";
import { ToDoIcon } from ".";

function CompletedIcon( {completed , onCompleted} ){
    //console.log('Completed pruebas: ' + completed); 
   // console.log('Color: '+ completed ?'green' : 'gray' );
    return (
        
        <ToDoIcon 
                    type="check"
                    color=  {completed ?'green' : 'gray'}
                    onClick={onCompleted} 
        />
    );

}


export {CompletedIcon}