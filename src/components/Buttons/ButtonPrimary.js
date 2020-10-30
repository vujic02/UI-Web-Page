import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: inline-flex;
  height: ${({theme}) => theme.btnSizeMdH};
  width: ${({theme}) => theme.btnSizeMdW};
  border: 2px solid ${({theme}) => theme.btnBorder};
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
      color: ${({ theme }) => theme.btnHoverColor}
    }
  `

const Slide = styled.div`
  width: 100%;
  height: 100%;
  left: -200px;
  background: ${({theme}) => theme.btnHoverBg};
  position: absolute;
  transition: all .35s ease-out;
  bottom: 0;
  .button-2:hover & {
    left: 0;
  }
`

const InnerA = styled.a`
    position: relative;
    transition: all .35s ease-out;
`

const ButtonPrimary = ({btnText}) => {

    return (
        <Button className="button-2">
        <Slide></Slide>
        <InnerA>{btnText}</InnerA>
        </Button>
    )
}


export default ButtonPrimary;
