import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "./ButtonCheckout";

const OrderStyle = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 10%;
    left: 0;
    background: #fff;
    width: 20vw;
    height: 90%;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

const OrderTitle = styled.h2`
    text-align: center;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const Orderlist = styled.ul`

`;

const Total = styled.div`
    display: flex;
    padding: 2vw;
    & span:first-child{
        flex-grow: 1;
    }
`;

export const Order = () => {
    return (
        <OrderStyle>
            <OrderTitle>Your order</OrderTitle>
            <OrderContent>
                <Orderlist>
                    

                </Orderlist>
            </OrderContent>
            <Total>
                <span>total</span>
                <span>5</span>
                <span>560</span>
            </Total>
            <ButtonCheckout>Order now</ButtonCheckout>
        </OrderStyle>
    )
}