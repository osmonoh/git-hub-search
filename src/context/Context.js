import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ repos, setRepos, count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
