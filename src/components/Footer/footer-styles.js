import styled from 'styled-components';
import {Link} from 'react-router-dom'

   export const FooterContainer = styled.footer`
      font-family: 'Oswald', sans-serif;
      background-color: rgba(1, 1, 1, 0.4);
   `

   export const FooterWrap = styled.div`
      padding: 48px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
   `

   export const FooterLinksContainer = styled.div`
      display: flex;
      justify-content: center;
      @media screen and (max-width: 820px) {
         padding-top: 32px;
      }
   `

   export const FooterLinksWrapper = styled.div`
      display: flex;
      flex-direction: row;

      @media (max-width: 820px) {
         flex-direction: column;
      }
   `

   export const FooterLinkItems = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 16px;
      text-align: left;
      width: 160px;
      box-sizing: border-box;

      @media screen and (max-width: 820px) {
         margin: 0;
         padding: 10px;
         width: 100%;
      }
   `

   export const FooterLinkTitle = styled.p`
      text-decoration: none;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      font-weight: 500;
   `

   export const FooterLink = styled(Link)`
      text-decoration: none;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #fff;
      transition: all ease-in-out 0.3s;

      &:hover {
         transition: all ease-in-out 0.3s;
         color: rgb(100, 255, 218);
      }
   `

   
   export const FooterTitleP = styled.p`
      text-decoration: none;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      font-weight: 500;
   `

   export const FooterP = styled.p`
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #fff;
      transition: all ease-in-out 0.3s;
   `

   export const SocialMedia = styled.section`
      max-width: 1000px;
      width: 100%;
   `

   export const SocialMediaWrap = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1100px;
      margin: 40px auto 0 auto;
      @media screen and (max-width: 820px) {
         flex-direction: column;
      }
   `

   export const SocialLogo = styled(Link)`
      color: #fff;
      text-decoration: none;
      justify-self: start;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      font-weight: 600;
   `

   export const WebsiteRights = styled.small`
      color: #fafafa;
      margin-bottom: 16px;
   `

   export const FooterIcons = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 240px;
   `


   export const FooterIcon = styled.a`
      text-decoration: none;
      color: #fff;
      font-size: 2rem;
      transition: all linear 0.3s;
      &:hover {
         transition: all linear 0.3s;
         color: rgb(100, 255, 218);
      }
   `

   export const SignupContainer = styled.section`
      max-width: 1000px;
      width: 100%;
   `

   export const SignupWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 1100px;
      margin: 40px auto 0 auto;
      @media screen and (max-width: 820px) {
         flex-direction: column;
      }
   `

   export const SignupForm = styled.input`
      outline: none;
      border: 2px solid black;
      margin-right: 10px;
      background: transparent;
      height: 38px;
      font-size: 1.5rem;
      @media screen and (max-width: 820px) {
         font-size: 1rem;
         margin-right: 0;
         margin-bottom: 10px;
      }
   `