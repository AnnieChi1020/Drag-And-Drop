import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpAndDown from "./pages/UpAndDown";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/react-dnd" element={<UpAndDown />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
