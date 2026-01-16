import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun ,faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    let [light,setLight]=useState(false);
    const Color={
        color:light? "white" : "gray"    }
        const ColorChange=()=>{
            setLight(!light)
        }
    return (
        <div >
             <FontAwesomeIcon icon={faSun} />
             <FontAwesomeIcon style={Color} onClick={ColorChange} className='text-3xl border' icon={faLightbulb} />
        </div>
    );
};

export default Header;