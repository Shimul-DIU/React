import React, { useContext } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun ,faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Parent from '../Parentcomponent/Parent';
import { Context1 } from '../../Components/Contexts/CountContext';

const Header = () => {
   const [count,setCount]=useContext(Context1)
    let [light,setLight]=useState(false);
    const Color={
        color:light? "blue" : "gray"    }
        const ColorChange=()=>{
            setLight(!light)
        }
    return (
        <div >

            <button onClick={()=>setCount(count+1)}>count :{count}</button>
             <FontAwesomeIcon icon={faSun} />
             
            <FontAwesomeIcon style={Color} onClick={ColorChange} className='text-3xl border' icon={faLightbulb} />
            <Parent></Parent>
        </div>
    );
};

export default Header;