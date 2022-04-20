import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import gitHub from "../api/gitHub";
import Repo from "./Repo";

const Search = () => {
  const [term, setTerm] = useState("");

  const { repos, setRepos } = useContext(MyContext);
  const { count, setCount } = useContext(MyContext);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (term) {
      const response = await gitHub.get("/search/repositories", {
        params: {
          q: term,
        },
      });

      setRepos(response.data.items);
      setCount(response.data.total_count);
    }
  };

  console.log(repos);

  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          name="search"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>Number of results: {count}</p>
      <div>
        {repos.map((item) => {
          return <Repo repo={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Search;
