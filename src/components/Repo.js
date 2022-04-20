import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import gitHub from "../api/gitHub";

const Repo = ({ repo }) => {
  const {
    owner,
    name,
    updated_at,
    stargazers_count,
    watchers,
    forks_count,
    open_issues_count,
    description,
  } = repo;

  const [languages, setLanguages] = useState("");
  const { account, setAccount } = useContext(MyContext);

  const getLanguages = async (login, repo) => {
    const response = await gitHub.get(`/repos/${login}/${repo}/languages`);
    setLanguages(Object.keys(response.data).join(", "));
  };

  useEffect(() => {
    getLanguages(owner.login, name);
  }, [repo]);

  const onRepoClick = async (owner) => {
    const response = await gitHub.get(`/users/${owner}`);

    console.log(response.data);
    setAccount(response.data);
    sessionStorage.setItem("account", JSON.stringify(account));
  };

  const getRepoQuality = () => {
    const getTimeSinceUpdate = () => {
      const today = new Date();
      const update = new Date(updated_at);
      return (today - update) / (1000 * 60 * 60 * 24 * 30);
    };
    return Math.round(
      (stargazers_count + watchers + forks_count) /
        (1 + getTimeSinceUpdate() + open_issues_count)
    );
  };

  return (
    <div>
      <p>repo: {name}</p>
      <p>owner: {owner.login}</p>
      <p>description: {description}</p>
      <p>languages: {languages}</p>
      <p>
        <span>stars: {stargazers_count}</span>
        <span> watchers: {watchers}</span>
        <span> forks: {forks_count}</span>
        <span> open issues: {open_issues_count}</span>
      </p>
      <p>
        last update: {updated_at.split("T")[0].split("-").reverse().join("-")}
      </p>
      <p>repo quality: {getRepoQuality()}</p>
      {/* <p>contributors: {item.contributors_url}</p> */}
      <Link
        to={`/account/${owner.login}`}
        onClick={() => onRepoClick(owner.login)}
      >
        <img src={owner.avatar_url} alt="" />
      </Link>
    </div>
  );
};

export default Repo;
