import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";

import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import AccountDetails from "./components/AccountDetails";

import "./style/style.css";

const App = () => {
  //   fetch("https://api.github.com/")
  //     //   fetch("https://api.github.com/search/users?q=osmonoh")
  //     //   fetch("https://api.github.com/users/osmonoh/repos?per_page=30&page=2")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

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
