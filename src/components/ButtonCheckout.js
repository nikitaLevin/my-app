import styled from "styled-components";

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299B01;
    color: #fff;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
    &:disabled {
        background-color: #bbb;
        color: #ccc;
        border-color: #aaa;
    }
`;