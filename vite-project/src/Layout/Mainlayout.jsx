import ContextProvider  from '../Components/Contexts/CountContext';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Section from '../Components/Section/Section';
import Article from '../Components/Article/Article'; 
import Footer from '../Components/Footer/Footer';
import  Aside from '../Components/Aside/Aside';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {

    return (
        <ContextProvider >
        <div className='min-h-screen'>
            
                
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

                <Footer></Footer>
           
        </div>
         </ContextProvider>
    );
};

export default Mainlayout;