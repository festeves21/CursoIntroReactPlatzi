import React from 'react';
import { AppUI } from './AppUi';
import { ToDoProvider } from '../ToDoContext';

function App() {
  return (<div>
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
    </div>
  );
}




export default App;
