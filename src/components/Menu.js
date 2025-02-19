import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import bannerImg from "../images/banner.png"
import { ListItem } from "./Listitem";

const Banner = styled.div`
    background-image: url(${bannerImg});
    background-size: cover;
    background-position: center;
    height: 300px;
`;

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 50px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner></Banner>
        <SectionMenu>
            <h2>Burgers</h2>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Starters and Drinks</h2>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
)