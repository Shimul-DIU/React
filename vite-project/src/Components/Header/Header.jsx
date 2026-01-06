import React from "react";
function Header(props){
    function myfunction(){
       document.querySelector('span').style.display='inline-block'
    }
    const styling={
        padding:'10px',
        border: '2px solid black',
        marginTop:'20px',
        display:'none'
    }
    return(
        <div>
            <span style={styling}>hello i am {props.name} my roll is {props.roll} and cgpa {props.cgpa}</span><br />
           <button onClick={myfunction}>click here</button> <br /><br />
           <p>my brothe is {props.info.name} her roll {props.info.roll}</p>
           {Object.entries(props.info).map(([key,value])=>{
            return<p key={key}>{key}:{value}</p>
           })}
           
        </div>
       
    )
}
export default Header