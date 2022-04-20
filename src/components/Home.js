import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Home = () => {
  const navigate = useNavigate();
  const { term, setTerm } = useContext(MyContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (term) {
      sessionStorage.setItem("term", term);
      navigate("/search");
    }
  };

  useEffect(() => {
    sessionStorage.removeItem("term");
  }, []);

  return (
    <div>
      <h1>GitHub</h1>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Home;
