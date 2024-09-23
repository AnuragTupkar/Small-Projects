import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import BackgroundChanger from "./pages/BackgroundChanger";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/backgroundchanger" element={<BackgroundChanger/>}/>
      </Routes>
    </>
  );
}

export default App;
