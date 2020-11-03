import styled from 'styled-components';
import {MdKeyboardBackspace} from 'react-icons/md'
import { Link } from 'react-router-dom';

export const SignIn = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background:  ${({theme}) => theme.body};
`

export const SignInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: 400px;
    border: 2px solid rgb(100, 255, 218);
    padding: 30px;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bodyReverse};
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @media screen and (max-width: 520px) {
        width: 250px;
        height: 250px;
    }

    @media screen and (max-width: 420px) {
        width: 200px;
        height: 200px;
    }
`


export const SignInInput = styled.input`
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    outline: none;
    border: 1px solid black;
    font-size: 18px;
    background: transparent;
    color: ${({theme}) => theme.textReverse};
    box-sizing: border-box;
`

export const SignInButton = styled.button`
    width: 100%;
    outline: none;
    border: 1px solid black;
    background-color: rgb(100, 255 , 218);
    font-size: 2rem;
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all ease-in-out 0.8s;

    &:hover {
        transition: all ease-in-out 0.8s;
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgb(100, 255 , 218);
        cursor: pointer;
    }

    &:active {
        background-color: rgba(100, 255, 218, 0.8);
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 1.5rem;
    }
`

export const SignInH2 = styled.h2`
    font-size: 2.2rem;
    text-align: center;
    text-transform: uppercase;
    color: ${({theme}) => theme.textReverse};
    @media screen and (max-width: 768px) {
        margin-bottom: 5px;
    }

`
export const SignInBack = styled(Link)`
    text-decoration: none;
    font-size: 2.8rem;
    color: ${({theme}) => theme.textReverse};
    top: 13.8%;
    position: absolute;

    @media screen and (max-width: 768px) {
        top: 15%;
    }

    @media screen and (max-width: 520px) {
        top: 20%;
    }

    @media screen and (max-width: 520px) {
        top: 10%;
    }
`

export const SignInBackIcon = styled(MdKeyboardBackspace)`
    color: ${({theme}) => theme.text};
    font-size: 5rem;
    &:hover {
        color: rgb(100, 255, 218);
    }
`