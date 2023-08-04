import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDndPage from "./pages/ReactDndPage";
import Layout from "./components/Layout";
import ReactBeautifulDndPage from "./pages/ReactBeautifulDndPage";
import JSOnlyPage from "./pages/JSOnlyPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/react-dnd" element={<ReactDndPage />} />
          <Route
            path="/react-beautiful-dnd"
            element={<ReactBeautifulDndPage />}
          />
          <Route path="/js-only" element={<JSOnlyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
