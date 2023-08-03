import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpAndDown from "./pages/UpAndDown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UpAndDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
