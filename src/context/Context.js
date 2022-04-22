import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [term, setTerm] = useState(sessionStorage.getItem("term") || "");
  const [lastTerm, setLastTerm] = useState(
    sessionStorage.getItem("lastTerm") || ""
  );
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [account, setAccount] = useState(
    JSON.parse(sessionStorage.getItem("account")) || {}
  );

  return (
    <MyContext.Provider
      value={{
        term,
        setTerm,
        lastTerm,
        setLastTerm,
        repos,
        setRepos,
        count,
        setCount,
        page,
        setPage,
        totalPages,
        setTotalPages,
        account,
        setAccount,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
