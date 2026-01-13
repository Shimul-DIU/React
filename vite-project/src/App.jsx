// import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Mainlayout from './Layout/Mainlayout';


const App = () => {
  
  return (
    <div>
        <Mainlayout></Mainlayout>
        <Outlet></Outlet>
    </div>
  );
};

export default App;