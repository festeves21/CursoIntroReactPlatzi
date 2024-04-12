import React from 'react';

function useLocalStorage( iteName, initialValue ){


    const[item, setItem] = React.useState(initialValue);
    const[loading, setLoading] = React.useState(true);
    const[error, setError] = React.useState(false);    

    React.useEffect( () => {
        setTimeout(()=> {
              try{
                const localStorageItem = localStorage.getItem(iteName);
                let parsedItem;
                if(!localStorageItem){
                    localStorage.setItem(iteName,JSON.stringify([]));
                    parsedItem=[]
                  }else{
                    parsedItem= JSON.parse(localStorageItem);
                    setItem(parsedItem)
                  }

                setLoading(false);
              }catch(error){ 
                setLoading(false);
                setError(true)}

            },1000);

        },[]);
        
          const saveItem = (newItem)=>{
            localStorage.setItem(iteName,JSON.stringify(newItem))
            setItem(newItem);
          }
        
          return {item,saveItem, loading,error}

  }

  
  export  { useLocalStorage}


  /*const defaultToDos = [
    { texto: 'Cortar Cebolla', completed: false},
    { texto: 'Terminar Curso de Platzi React Intro', completed: true},
    { texto: 'Terminar Curso de Platzi React Avanzado', completed: false},
    { texto: 'Terminar Curso de Platzi Java', completed: true},
    { texto: 'Terminar Curso de Platzi C#', completed: false}
]

localStorage.setItem('ToDos_V1', JSON.stringify(defaultToDos));*/

//localStorage.setItem('ToDos_V1',defaultToDos);
//localStorage.removeItem('ToDos_V1');