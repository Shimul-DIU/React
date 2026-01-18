import React from 'react';
import { useContext } from 'react';
import { Context1 } from '../../Components/Contexts/CountContext';


const Child = () => {
   const [count,setCount]=  useContext(Context1)
    return (
        <div>
        <button onClick={()=>setCount(count+1)} className='bg-blue-400 mb-2'>count is </button> {count}
        </div>
    );
};

export default Child;