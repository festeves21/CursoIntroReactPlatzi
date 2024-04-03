import React from "react";
import { ToDoIcon } from "./ToDoIcon";

function CompletedIcon({onCompleted}){
    return (
        <ToDoIcon 
                    type='check' 
                    color='gray' 
                    onClick={onCompleted}
        />
    );

}


export {CompletedIcon}