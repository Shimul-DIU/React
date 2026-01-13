import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Section from '../Components/Section/Section';
import Article from '../Components/Article/Article'; 
import Footer from '../Components/Footer/Footer';
import  Aside from '../Components/Aside/Aside';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Section></Section>
            <Article></Article>
            <Aside></Aside>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;