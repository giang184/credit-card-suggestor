import React from "react";
import Header from "./Header";
import Navbar from './Navbar';
import CardControl from './CardControl';

function App(){
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <CardControl />
    </React.Fragment>
  );
}

export default App;