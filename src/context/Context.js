import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);
  //   const [owner, setOwner] = useState({});

  const [account, setAccount] = useState({});

  return (
    <MyContext.Provider
      value={{ repos, setRepos, count, setCount, account, setAccount }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
