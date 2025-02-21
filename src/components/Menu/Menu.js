import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./Listitem";
import { Banner } from "./Banner";

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 50px;
    height: 100%;
    margin-left: 20vw;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const NameSection = styled.h2`
    cursor: default;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner></Banner>
        <SectionMenu>
            <NameSection>Burgers</NameSection>
            <ListItem
            itemList={dbMenu.burger}
            setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <NameSection>Starters and Drinks</NameSection>
            <ListItem
            itemList={dbMenu.other}
            setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
)