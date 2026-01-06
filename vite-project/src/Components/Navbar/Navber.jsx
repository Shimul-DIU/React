import React from 'react';
import './Navbar.css'

const Navber = (props) => {
    return (
        <div>
            <div className='nav'>
                <a href="">Home</a>
                <div><input type="search" name="" placeholder='Search' id="" /></div>
                <a href="">Contact</a>
                <a href="">About us</a>
                <a href="">Servises</a>
                
            </div>
            
                {props.objarray.map((item,index)=>(
                    <div><span  key={index}>my name is: {item.name},</span>&nbsp;
                    <span key={index}>my roll is: {item.roll}</span></div>
                ))}
            
        </div>
    );
};

export default Navber;