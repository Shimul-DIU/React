import React from 'react';
import { useContext } from 'react';
import { Countcontext } from '../../store/Contexts/Context';

const Child = () => {
   const [count,setCount]=  useContext(Countcontext)
    return (
        <div>
        <button onClick={()=>setCount(count+1)} className='bg-blue-400 mb-2'>count is </button> {count}
        </div>
    );
};

export default Child;