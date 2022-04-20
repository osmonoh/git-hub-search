import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [term, setTerm] = useState(sessionStorage.getItem("term") || "");
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState(
    JSON.parse(sessionStorage.getItem("account")),
    {}
  );

  return (
    <MyContext.Provider
      value={{
        term,
        setTerm,
        repos,
        setRepos,
        count,
        setCount,
        account,
        setAccount,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
