import React from "react";
import styled from "styled-components";

const OrderStyle = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);

`;

export const Order = () => {
    return (
        <OrderStyle>
            Order
        </OrderStyle>
    )
}