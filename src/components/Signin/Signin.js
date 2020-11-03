import React from 'react';
import {
    SignIn,
    SignInContainer,
    SignInButton,
    SignInWrapper,
    SignInInput,
    SignInH2,
    SignInBackIcon,
    SignInBack

} from './sign-in-styles';

const Signin = ({theme}) => {
    return (
        <SignIn>
            <SignInWrapper>
                <SignInBack to="/" exact>
                    <SignInBackIcon />
                </SignInBack>
                <SignInContainer>
                    <SignInH2>Sign in</SignInH2>
                    <SignInInput type="input" placeholder="Email"/>
                    <SignInInput type="password" placeholder="Password"/>
                    <SignInButton>Sign in</SignInButton>
                </SignInContainer>
            </SignInWrapper>
        </SignIn>
    )
}

export default Signin;
