import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./Listitem";
import { Banner } from "./Banner";

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 50px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const NameSection = styled.h2`
    cursor: default;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner></Banner>
        <SectionMenu>
            <NameSection>Burgers</NameSection>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <NameSection>Starters and Drinks</NameSection>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
)