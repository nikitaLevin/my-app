import React from "react";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";
import { GlobalStyle } from "./components/GlobalStyle";
import { ModalWindow } from "./components/ModalWindow";
import { Order } from "./components/Order";

function App() {

  const [openItem, setOpenItem] = React.useState(null);



  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalWindow openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
