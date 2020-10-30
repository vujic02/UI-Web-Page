import React from 'react';
import Navbar from '../Navbar/Navbar'
import AboutSection from '../About/AboutSection';
import CardSection from '../CardSection/CardSection';
import Sidebar from '../Sidebar/Sidebar';
import LargeTextSection from '../Text/Large/LargeTextSection';
import SignupSection from '../Signup/SignupSection';

const Home = ({theme, isOpen, setIsOpen, themeToggler}) => {

    const textOne="Premium bank";
    const textTwo="Get access to our exclusive content by purchasing, trial week is on us, sign up now!";
    const headerOne="Large transactions are inevitable";

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} themeToggler={themeToggler}/>
            <Navbar toggle={toggle} themeToggler={themeToggler}/>
            <LargeTextSection theme={theme}  textOne={textOne} textTwo={textTwo} headerOne={headerOne} />
            <CardSection theme={theme} />
            <AboutSection />
            <AboutSection />
            <SignupSection />
        </ >
    )
}

export default Home;
