import React from 'react';
import useCount from '../../Hookes/useCount';
const Section = () => {
    let{count,increment,decrement}=useCount(7);
    return (
        <div>
            hi i am section 
            <p className="text-2xl">count is: {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Section;