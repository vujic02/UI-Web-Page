import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    ModeBtn,
    ModeBtnWrapper,
    SidebarWrapper,
    SidebarMenu,
    SidebarBtnWrap,
    SidebarLink,
    SidebarRouteBtn
}   from './sidebar-styles'

const Sidebar = ({isOpen, toggle, themeToggler}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <ModeBtnWrapper onClick={themeToggler}>
                <ModeBtn />
            </ModeBtnWrapper>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRouteBtn to="/signin">Sign in</SidebarRouteBtn>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
