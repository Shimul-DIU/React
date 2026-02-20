import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'

const Navbar = ({ students }) => {
    
    return (
        <div>
            <div className='flex justify-around bg-blue-500 p-4 text-xl'>
                <Link to={'/Home'} >Home</Link>
                <div><input type="search" name="" placeholder='Search' id="" /></div>
                <Link to={'/Products'}>Products</Link>
                <Link to={'/Contact'} >Contact</Link>
                <Link to={'/AboutUs'}>About us</Link>
                <Link to={'/Servises'}>Servises</Link>
                
            </div>
            <h1>{students[0].name}</h1>
            <h1>{students[0].roll}</h1>
            <h1>{students[0].cgpa}</h1>
               
            
        </div>
    );
};

export default Navbar;