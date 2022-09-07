import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

const App = () => {

  const mensaje = "Bienvenidos a 3dstore"

  return (
    <>
      <Navbar />
      <ItemListContainer 
      greeting={mensaje}/>
    </>
  )
}

export default App

