import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../ButtonCheckout";
import { OrderListItem } from "../OrderListItem";

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

const Totalprice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders }) => {
    return (
        <OrderStyle>
            <OrderTitle>Your order</OrderTitle>
            <OrderContent>
                {orders.length ?
                <Orderlist>
                    {orders.map(order => <OrderListItem order={order}/>)}
                </Orderlist> :
                <EmptyList>Your cart is empty</EmptyList>}
            </OrderContent>
            <Total>
                <span>total</span>
                <span>5</span>
                <Totalprice>560</Totalprice>
            </Total>
            <ButtonCheckout>Order now</ButtonCheckout>
        </OrderStyle>
    )
}