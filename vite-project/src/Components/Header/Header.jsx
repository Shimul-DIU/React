import React from "react";
function Header(){
    function myfunction(){
       document.querySelector('span').innerText=`hello shimul` 
    }
    const styling={
        padding:'10px',
        border: '2px solid black',
        marginTop:'20px',
        display:'inline-block'
    }
    return(
        <div>
            <span style={styling}>hello</span><br />
           <button onClick={myfunction}>click here</button> <br /><br />
        </div>
       
    )
}
export default Header