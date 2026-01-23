import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Loginform = () => {
    let navigate=useNavigate()
    let [message,setMessage]=useState(null);
    let [color,setColor]=useState(false)
   const Myform=(e)=>{
        e.preventDefault();
        let name=e.target.username.value
        let password=e.target.password.value
        navigate('/')
    
        if (password.length<6){
            setMessage('password must be 6 character')
            setColor(false)
            
            return;
            
        }
        else{
            console.log(name)
            console.log(password)
            setMessage(null)
        }
        e.target.reset();
    }
    return (
        <div className='border p-4 m-4'>
            <form action="" onSubmit={Myform}>
               Username:
                <input type="text" className='border ps-2'  placeholder='username' name='username' required/>
                <br />
                <br />
                
                password: <input className={`border ${color?'border-2 border-red-500':''}`} name='password'  type="password" placeholder='password' />
               <p className='text-red-500   text-center border rounded-sm p-0.5 mt-0.5 border-black'>{message}</p><br />
                <button className='block mx-auto border ' type="submit">submit</button>
                
            </form>
        </div>
    );
};

export default Loginform;