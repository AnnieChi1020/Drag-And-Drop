import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDndPage from "./pages/ReactDndPage";
import Layout from "./components/Layout";
import ReactBeautifulDndPage from "./pages/ReactBeautifulDndPage";
import JSOnlyPage from "./pages/JSOnlyPage";
import paths from "./constants/paths";
import WithButtonsPage from "./pages/WithButtonsPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={paths.REACT_DND} element={<ReactDndPage />} />
          <Route
            path={paths.REACT_BEAUTIFUL_DND}
            element={<ReactBeautifulDndPage />}
          />
          <Route path={paths.JS_ONLY} element={<JSOnlyPage />} />
          <Route path={paths.BUTTONS} element={<WithButtonsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
