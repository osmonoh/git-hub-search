import React from "react";
import Search from "./components/Search";

const App = () => {
  //   fetch("https://api.github.com/")
  //     //   fetch("https://api.github.com/search/users?q=osmonoh")
  //     //   fetch("https://api.github.com/users/osmonoh/repos?per_page=30&page=2")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
