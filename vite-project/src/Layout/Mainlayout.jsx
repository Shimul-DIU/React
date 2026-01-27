import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Section from '../Components/Section/Section';
import Article from '../Components/Article/Article'; 
import Footer from '../Components/Footer/Footer';
import  Aside from '../Components/Aside/Aside';
import { Outlet } from 'react-router-dom';
import ContextProvider from '../store/Contexts/CountContext'

const Mainlayout = () => {

    return (
        <div>
            <ContextProvider>
                <Header></Header>
                <Navbar></Navbar>
                
                    <div className='flex justify-around'>
                    <div >
                        <Section></Section>
                        <Article></Article>
                    </div>
                    <Aside>
                        <Outlet></Outlet>   
                    </Aside>
                
                </div>

                <Footer></Footer>
    
            </ContextProvider>   
            </div> 
    );
};

export default Mainlayout;