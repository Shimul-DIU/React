import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';




const Registration = () => {
let navigate=useNavigate()
  const [form,setForm]=useState({
    name:'',
    email:'',
    password:''
  })


  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(event)
    try {
       let res= await axios.post('http://localhost:5000/api/register', form)
       console.log(res)
        setForm({
        name: "",
        email: "",
        password: "",
      });
      navigate('/loginform')
    } catch (error) {
      console.log(error)
    }



  }
  const handleChange=(e)=>{
    console.log(e)
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit } >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"  onChange={handleChange}/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange}/>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;