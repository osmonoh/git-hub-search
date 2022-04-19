import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import AccountDetails from "./components/AccountDetails";

const App = () => {
  //   fetch("https://api.github.com/")
  //     //   fetch("https://api.github.com/search/users?q=osmonoh")
  //     //   fetch("https://api.github.com/users/osmonoh/repos?per_page=30&page=2")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/account/:id" element={<AccountDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
