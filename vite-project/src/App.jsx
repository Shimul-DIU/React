import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Navber from './Components/Navbar/Navber';
import Artical from './Components/Artical/Artical';

const App = () => {
  const objarray=[{name:'shimul',roll:8,gpa:4.50},{name:'mustafa',roll:6,gpa:5}]
let [num,setNum]=useState(8)
function Bignum(){
    setNum(num+1)
}
function Smallnum(){
    setNum(num-1)
}
  return (
    <div>
     <Navber objarray={objarray}></Navber>
      <Header></Header>
      <Artical></Artical>
      <h1 style={{marginLeft:'50px'}}>{num}</h1>
      <button onClick={Bignum}>increase</button>&nbsp;
      <button onClick={Smallnum}>decrease</button>

    </div>
  );
};

export default App;