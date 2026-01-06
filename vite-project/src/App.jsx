import React from 'react';
import Header from './Components/Header/Header';
import Navber from './Components/Navbar/Navber';


const App = () => {
  const objarray=[{name:'shimul',roll:8,gpa:4.50},{name:'mustafa',roll:6,gpa:5}]

  return (
    <div>
     <Navber objarray={objarray}></Navber>
      <Header></Header>

    </div>
  );
};

export default App;