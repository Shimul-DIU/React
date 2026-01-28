import React from 'react';
import { useState } from 'react';
const useCount = (initialValue=0) => {
    let [count,setCount]=useState(initialValue);
    let increment=()=>{
        setCount(count+1);
    }
    let decrement=()=>{
        setCount(count-1);
    }
    return {count,increment,decrement}
};

export default useCount;