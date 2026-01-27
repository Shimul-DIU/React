import { useState} from 'react';
import { Countcontext } from './Context';

const ContextProvider = ({children}) => {
    const [count,setCount]=useState(0);
    return (
      <div>
        <Countcontext.Provider value={[count,setCount]}>
        {children}
       </Countcontext.Provider>
      </div>
    );
};
export default ContextProvider;
