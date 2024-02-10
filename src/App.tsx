import React from "react";
import "./App.scss";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./component/Admin";
// import Edit from "./component/Edit";
import Menu from "./component/Menu/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/product" element={<Edit />} /> */}
      </Routes>

      {/* <Admin />
      <Menu />
      <Product /> */}
    </div>
  );
}

export default App;
