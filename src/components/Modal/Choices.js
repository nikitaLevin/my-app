import React from "react";
import styled from "styled-components";


const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    display: block;   
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    margin-right: 5px;
    display: flex;
    align-items: center; 
`;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Choices</h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                <ChoiceLabel key={i}>
                    <ChoiceRadio
                    type="radio"
                    name="choices"
                    checked={choice === item}
                    value={item}
                    onChange={changeChoices}/>
                    {item}
                </ChoiceLabel>
                ))}
               
            </ChoiceWrap>
        </>
    )
}