import React from "react";
import styled from "styled-components";
import logoImg from '../../images/logo.svg';
import signImg from '../../images/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
    cursor: default;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const SignInBtn = styled.button`
    margin-right: 1.5vw;
    border: transparent; 
    background-color: transparent;
    color: white;
    font-size: 16px;
`;

const ImgSign = styled.img`
    align-items: center;
    width: 30px;
    height: 30px;
`;



export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src = {logoImg} alt="logo"/>
            <H1>Mr Donald's</H1>
        </Logo>
        <SignInBtn>
            <ImgSign src = {signImg} alt="Sign In Img" />
            <p>Sign in</p>
        </SignInBtn>
    </NavBarStyled>
);