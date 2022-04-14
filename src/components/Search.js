import React, { useState } from "react";
import gitHub from "../api/gitHub";

const Search = () => {
  const [term, setTerm] = useState("");

  const [repos, setRepos] = useState([]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await gitHub.get("/search/repositories", {
      params: {
        q: term,
      },
    });

    // console.log(response.data.items, response.data.total_count);
    setRepos(response.data.items);
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
      </form>
      <div>
        {repos.map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Search;
