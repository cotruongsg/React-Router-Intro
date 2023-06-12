import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<VendingMachine />} />
        <Route path="/soda" exact element={<Soda />} />
        <Route path="/chips" exact element={<Chips />} />
        <Route path="/sardines" exact element={<Sardines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
