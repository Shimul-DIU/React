import React, { createContext,useState,useEffect} from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Section from '../Components/Section/Section';
import Article from '../Components/Article/Article'; 
import Footer from '../Components/Footer/Footer';
import  Aside from '../Components/Aside/Aside';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
const CountContext= createContext();
const [count,setCount]=useState(0);


    return (
       
        <div className='min-h-screen'>
             <CountContext.Provider value={count}>
            <button onClick={()=>setCount(count+1)} className='border bg-blue-700 p-2'>increase</button>
            <p className='text-center text-2xl'>Count:{count}</p>
            <Header></Header>
            <Navbar></Navbar>
            
                <div className='flex justify-around'>
                <div className='w-1/4'>
                    <Section></Section>
                    <Article></Article>
                </div>
                <Aside>
                    <Outlet></Outlet>   
                </Aside>
               
            </div>

            <Footer></Footer>y
            </CountContext.Provider>
        </div>
    );
};

export default Mainlayout;