import React, { useState } from 'react';
import { Countcontext } from './Context';

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <Countcontext.Provider value={[count, setCount]}>
      {children}
    </Countcontext.Provider>
  );
};

export default ContextProvider;
