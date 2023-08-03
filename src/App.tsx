import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpAndDown from "./pages/UpAndDown";
import Layout from "./components/Layout";
import ReactBeautifulDndPage from "./pages/ReactBeautifulDndPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/react-dnd" element={<UpAndDown />} />
          <Route
            path="/react-beautiful-dnd"
            element={<ReactBeautifulDndPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
