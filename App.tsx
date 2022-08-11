import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import product from './product.json'
// import type {RootSate} from './store'

function App() {




  const count = useSelector((state: any) => state)
  console.log("count",count);
  

  // const state:any =useSelector((state)=>(state))
  // console.log("state",state);

  // const dispatch=useDispatch();
  

  const [name,setName]=React.useState('react')
  const update=(value:any)=>{
    setName(value);
  } 

  
  return (
    
    <div className="App">
      <>
      <button onClick={()=> update("js")}>update</button>
      {product.map((item:any,index:number)=>{
        <div key={index}>
          <h3>{item.name}</h3>
        </div>
      })}
    </>

    </div>
  
  );
}

export default App