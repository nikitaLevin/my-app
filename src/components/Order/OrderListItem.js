import React from "react";
import styled from "styled-components";
import trashImage from "../../images/Trash.svg"
import { totalPriceItems } from "../Function/secondaryFunction";
import { setCurrency } from "../Function/secondaryFunction";

const TrashBtn = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 5px;
    font-size: 80%;
    flex-wrap: wrap;
`;

const ItemName = styled.span`
    flex-grow: 1;
    cursor: default;
    max-width: 50%;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
    cursor: default;
`;


const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
`;

export const OrderListItem = ({ order }) => {
    
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ')

    return (
    <OrderItemStyled>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{setCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashBtn/>
        {topping && <Toppings>Toppings: {topping} </Toppings>}
    </OrderItemStyled>
)};

