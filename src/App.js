import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Menu } from "./components/Menu/Menu";
import { GlobalStyle } from "./components/Style/GlobalStyle";
import { ModalWindow } from "./components/Modal/ModalWindow";
import { Order } from "./components/Order/Order";
import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";



function App() {

  const openItem = useOpenItem();
  const orders = useOrders();



  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} {...openItem} />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalWindow {...openItem} {...orders}/>}
    </>
  );
}

export default App;
