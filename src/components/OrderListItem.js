import React from "react";
import styled from "styled-components";
import trashImage from "../images/Trash.svg"

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
    margin: 15px;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;




export const OrderListItem = ({ order }) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>count</span>
        <ItemPrice>{order.price.toLocaleString('us-US',
                    {style: 'currency', currency: 'USD'})}</ItemPrice>
        <TrashBtn/>
    </OrderItemStyled>
)

