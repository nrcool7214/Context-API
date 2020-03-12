
import React, { useState } from 'react';
import B from './B';
import {Context} from "./Context"

function App() {
  console.log(Context)
  const [count,setCount]=useState(0)
  const [items,additem]=useState(["item1","item2"])
  return (
    <Context.Provider value={{count,setCount,items,additem}}> 
    <div className="App">
      <h1>My React App</h1>
      <B/>
    </div>
    </Context.Provider>
  );
}


export default App;