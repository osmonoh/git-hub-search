import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";

import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import AccountDetails from "./components/AccountDetails";

import "./style/style.css";

const App = () => {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/account/:id" element={<AccountDetails />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
};

export default App;
