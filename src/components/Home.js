import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import { GoSearch } from "react-icons/go";

const Home = () => {
  const navigate = useNavigate();
  const { term, setTerm } = useContext(MyContext);
  const { lastTerm, setLastTerm } = useContext(MyContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (term) {
      sessionStorage.setItem("term", term);
      sessionStorage.setItem("lastTerm", lastTerm);
      navigate("/search");
    }
  };

  useEffect(() => {
    sessionStorage.removeItem("term");
  }, []);

  return (
    <div className="home">
      <h1 className="title">GitHub</h1>
      <h2 className="subtitle">repository search</h2>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="home-search-container">
          <GoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search GitHub for repositories"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              setLastTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
