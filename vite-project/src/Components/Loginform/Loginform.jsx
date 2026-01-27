
import { useState } from 'react';
import Header from './../Header/Header';


const Loginform = () => {
    let[showform,setShowform]=useState(true)
    function crosbutton(e){
        e.preventDefault()
        setShowform(prev=>!prev)

        }
       if (!showform) {
  return null;
}

            
    return (
        <div>
            <form action="" className="flex flex-col space-y-5 bg-white px-5 pb-10 pt-1.5 m-5 rounded">
                
                <button type='button' className='flex justify-end' onClick={crosbutton}>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
                <h1 className='text-4xl font-medium text-center'>Login form</h1>
                <div >
                    <label htmlFor="username" >Username: </label>
                    <input type="text"  placeholder='Username'name='username'id='username' className='border_style pl-1.5'/>   
                </div>
                <div >
                    <label htmlFor="password">Password: </label> 
                    <input type="password" name="password" id="password" className="border_style pl-1.5" placeholder='Password'/>       
                </div>
                <input type="submit" className="hover:cursor-pointer rounded px-2 py-1 bg-blue-500 text-white " ></input>
                          
            </form>
        </div>
    );
};

export default Loginform;