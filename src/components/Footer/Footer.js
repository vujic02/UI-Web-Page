import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    FooterTitleP,
    FooterP,
    FooterIcon,
    FooterIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SignupContainer,
    SignupWrap,
    SignupForm
}   from './footer-styles'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub,
    FaLinkedin
}   from 'react-icons/fa'

import ButtonPrimary from '../Buttons/ButtonPrimary'



const Footer = () => {
    return (
        <FooterContainer>

            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterTitleP>Find us</FooterTitleP>
                            <FooterP>1470 Broadway,</FooterP>
                            <FooterP>New York</FooterP>
                            <FooterP>10036</FooterP>
                            <FooterP> 185/535/235</FooterP>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Testemonials</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Find us</FooterLinkTitle>
                            <FooterLink>1470 Broadway,</FooterLink>
                            <FooterLink>New York,</FooterLink>
                            <FooterLink>10036</FooterLink>
                            <FooterLink> 185/535/235</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Find us</FooterLinkTitle>
                            <FooterLink>1470 Broadway,</FooterLink>
                            <FooterLink>New York,</FooterLink>
                            <FooterLink>10036</FooterLink>
                            <FooterLink> 185/535/235</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Nikola Vujic
                        </SocialLogo>
                        <WebsiteRights>Nikola Vujic © { new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <FooterIcons>
                            <FooterIcon href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </FooterIcon>
                            <FooterIcon href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </FooterIcon>
                            <FooterIcon href="/" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </FooterIcon>
                            <FooterIcon href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </FooterIcon>
                            <FooterIcon href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </FooterIcon>
                        </FooterIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <SignupContainer>
                    <SignupWrap>
                        <SignupForm placeholder="Email"/>
                        <ButtonPrimary btnText="Sign up" />
                    </SignupWrap>
                </SignupContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
