import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {VscColorMode} from 'react-icons/vsc'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.2)')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.7s all ease;
    font-family: 'Oswald', sans-serif;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    width: 80px;
    height: 80px;
    margin-left: 25px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        transform: translate(-100%, 40%);
        color: #fff;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid rgba(100, 255, 218);
    } 
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: rgba(100, 255, 218);
    white-space: nowrap;
    padding: 12px 28px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const ModeBtn = styled(VscColorMode)`
    padding-left: 20px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    transition: 0.7s all ease-in-out;
    &:hover {
        transition:  0.5s all linear;
        color: rgba(100, 255, 218, 1)
    }
`
