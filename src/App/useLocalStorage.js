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