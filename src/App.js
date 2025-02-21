import React from "react";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";
import { GlobalStyle } from "./components/GlobalStyle";
import { ModalWindow } from "./components/ModalWindow";
import { Order } from "./components/Order";
import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";


function App() {

  const openItem = useOpenItem();
  const orders = useOrders();



  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalWindow {...openItem} {...orders}/>}
    </>
  );
}

export default App;
