import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

import gitHub from "../api/gitHub";
import Repo from "./Repo";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const { term, setTerm } = useContext(MyContext);
  const { repos, setRepos } = useContext(MyContext);
  const { count, setCount } = useContext(MyContext);

  const onPageLoad = async () => {
    setLoading(true);
    const response = await gitHub.get("/search/repositories", {
      params: {
        q: term,
      },
    });
    setRepos(response.data.items);
    setCount(response.data.total_count);
    setLoading(false);
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (term) {
      setLoading(true);
      sessionStorage.setItem("term", term);
      const response = await gitHub.get("/search/repositories", {
        params: {
          q: term,
        },
      });
      setRepos(response.data.items);
      setCount(response.data.total_count);
      setLoading(false);
    }
  };

  console.log(repos);

  return (
    <div className="search">
      <form className="search-form" onSubmit={(e) => onFormSubmit(e)}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <p>{loading ? `Loading...` : `Number of results: ${count}`}</p>
      <div>
        {repos.map((item) => {
          return <Repo repo={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Search;
