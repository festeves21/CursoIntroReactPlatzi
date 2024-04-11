import React from 'react';

function useLocalStorage( iteName, initialValue ){

    const localStorageItem = localStorage.getItem(iteName);
    let parsedItem;
    if(!localStorageItem){
      localStorage.setItem(iteName,JSON.stringify([]));
      parsedItem=[]
    }else{
      parsedItem= JSON.parse(localStorageItem);
    }
    const[item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem)=>{
      localStorage.setItem(iteName,JSON.stringify(newItem))
      setItem(newItem);
    }
  
    return [item,saveItem]
  }

  
  export  { useLocalStorage}