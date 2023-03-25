import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Lyout/Layout";
import Home from "./Components/Pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
