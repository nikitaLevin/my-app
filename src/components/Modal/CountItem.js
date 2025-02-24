import React from "react";
import styled from "styled-components";


const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CountInput = styled.input`
    width: 40px;
    height: 20px;
    font-size: 20px;
    margin: 10px;
`;

const ButtonCount = styled.button`
    background-color: transparent;
    height: 20px;
    border: none;
`;

export function CountItem({ count, setCount, onChange }) {

    return (
        <CountWrapper>
            <span>Count</span>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )
}

