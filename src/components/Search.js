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

  fetch("https://api.github.com/repos/dci-pawple/pawfect-frontend/git/commits")
    .then((res) => res.json())
    .then((data) => console.log(data));

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
          return (
            <div>
              <p>repo: {item.name}</p>
              <p>owner: {item.owner.login}</p>
              <p>{item.owner.url}</p>
              <p>langs: {item.languages_url}</p>
              <p>
                <span>stars: {item.stargazers_count}</span>
                <span> watchers: {item.watchers}</span>
                <span> forks: {item.forks_count}</span>
                <span> open issues: {item.open_issues_count}</span>
              </p>
              <p>updated at: {item.updated_at}</p>
              <p>contributors: {item.contributors_url}</p>
              <img src={item.owner.avatar_url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
