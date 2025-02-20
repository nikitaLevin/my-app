import React from "react";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";
import { GlobalStyle } from "./components/GlobalStyle";
import { ModalWindow } from "./components/ModalWindow";
import { Order } from "./components/Order";
import { useOpenItem } from "./components/useOpenItem";


function App() {

  const openItem = useOpenItem();



  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu {...openItem}/>
      <ModalWindow {...openItem}/>
    </>
  );
}

export default App;
