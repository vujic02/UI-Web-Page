import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import * as Scroll from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    ModeBtn
}   from './navbar-styles'


const myLogo = require("./utils/logo.png")

const Navbar = ({toggle, themeToggler}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo src={myLogo} to="/"/>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" spy={true} smooth={true} exact="true" offset={-100} duration={500}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" spy={true} smooth={true} exact="true" offset={-100} duration={500}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" spy={true} smooth={true} exact="true" offset={-160} duration={500}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" spy={true} smooth={true} exact="true" offset={-100} duration={500}>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        <ModeBtn onClick={themeToggler}>Theme</ModeBtn>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
