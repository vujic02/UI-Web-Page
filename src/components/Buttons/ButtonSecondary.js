import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: inline-flex;
  height: ${({theme}) => theme.btnSizeLgH};
  width: ${({theme}) => theme.btnSizeLgW};
  border-radius: 50px;
  background: rgba(100, 255, 218, 1);
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Heebo', sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
      transition: all 0.3s ease-in-out;
      background-color: ${({theme}) => theme.btnSizeLgBg};
      color: ${({ theme }) => theme.btnHoverColor}
    }
`

const InnerA = styled.a`
    position: relative;
    transition: all .4s ease-out;
`

const ButtonSecondary = ({btnText}) => {

    return (
        <Button className="button-2">
        <InnerA>{btnText}</InnerA>
        </Button>
    )
}


export default ButtonSecondary;
