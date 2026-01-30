 import React, { useMemo } from 'react';
// import { Outlet } from 'react-router-dom';
import Mainlayout from './Layout/Mainlayout';
import { useState } from 'react';
const App = () => {
 const [increase,setIncrease]=useState(0)
 const [decrease,setDecrease]=useState(100)
 let trouble=useMemo(()=>{
  console.log("trouble")
  return increase*4
},[increase])
 
  return (
    <div >
      {trouble}
       <button onClick={()=>{setIncrease(increase+4)}}>increase {increase}</button><br /><hr />
       <button onClick={()=>{setDecrease(decrease-4)}}> decrease {decrease}</button>
        <Mainlayout></Mainlayout>
        
        
    </div>
  );
};

export default App;