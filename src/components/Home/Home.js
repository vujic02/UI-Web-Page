import React from 'react';
import Navbar from '../Navbar/Navbar'
import CardSection from '../CardSection/CardSection';
import Sidebar from '../Sidebar/Sidebar';
import LargeTextSection from '../Text/Large/LargeTextSection';
import Footer from '../Footer/Footer'
import {LargeTextWrapper} from '../Text/Large/large-text-styles';
import {cssHomeText, cssAbout, cssDiscover, cssSignup} from '../Themes/Themes';
import ReusableSection from '../Reusable/ReusableSection';



const Home = ({theme, isOpen, setIsOpen, themeToggler}) => {

    const textOneHome = "Premium bank";
    const textTwoHome = "Get access to our exclusive content by purchasing, trial week is on us, sign up now!";
    const headerOneHome = "Large transactions are inevitable";
    const btnTextHome = "Get started";

    const textOneAbout = "Exquisite Content";
    const textTwoAbout = "Get access to our exclusive content by purchasing, trial week is on us, sign up now!";
    const headerOneAbout = "Large transactions are inevitable";
    const btnTextAbout = "Get started";

    const discoverHeader = "Find out what we offer"
    const discoverText1 = "Greetings!";
    const discoverText2 = "If you want to become a web developer and a photographer, what are you waiting for? Start now.";
    const discoverBtn = "Start now  ⇾"

    const signupHeader = "Sign up for more amazing stuff.";
    const signupText1 = "Easy, Efficient, Extra Content.";
    const signupText2 = "If you want to become a web developer and a photographer, what are you waiting for? Start now.";
    const signupBtn = "Sign up ⇾";

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} themeToggler={themeToggler}/>
            <Navbar toggle={toggle} themeToggler={themeToggler}/>
            <LargeTextWrapper>
                <LargeTextSection theme={theme}  textOne={textOneHome} textTwo={textTwoHome} headerOne={headerOneHome} btnText={btnTextHome} {...cssHomeText}/>
            </LargeTextWrapper>
            <ReusableSection textOne={textOneAbout} textTwo={textTwoAbout} headerOne={headerOneAbout} btnText={btnTextAbout} {...cssAbout}/>
            <CardSection theme={theme} />
            <ReusableSection textOne={discoverText1} textTwo={discoverText2} headerOne={discoverHeader} btnText={discoverBtn} {...cssDiscover}/>
            <ReusableSection textOne={signupText1} textTwo={signupText2} headerOne={signupHeader} btnText={signupBtn} {...cssSignup}/>
            <Footer />
        </ >
    )
}

export default Home;
