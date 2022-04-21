import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import gitHub from "../api/gitHub";

const Repo = ({ repo }) => {
  const {
    owner,
    name,
    created_at,
    updated_at,
    stargazers_count,
    watchers,
    forks_count,
    open_issues_count,
    description,
    html_url,
  } = repo;

  const [languages, setLanguages] = useState("");
  const { setAccount } = useContext(MyContext);

  const getLanguages = async (login, repo) => {
    const response = await gitHub.get(`/repos/${login}/${repo}/languages`);
    setLanguages(Object.keys(response.data).join(", "));
  };

  useEffect(() => {
    getLanguages(owner.login, name);
  }, [repo]);

  const onRepoClick = async (owner) => {
    const response = await gitHub.get(`/users/${owner}`);

    console.log("response.data in Repo.js: ", response.data);
    setAccount(response.data);
    sessionStorage.setItem("account", JSON.stringify(response.data));
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
    <div className="repo">
      <Link
        className="repo-link"
        to={`/account/${owner.login}`}
        onClick={() => onRepoClick(owner.login)}
      >
        <div className="owner-avatar">
          <img src={owner.avatar_url} alt="owner-avatar" />
        </div>

        <div className="repo-info">
          <div className="repo-info-firstline">
            <h3>{name}</h3>
            <p>Quality: {getRepoQuality()}</p>
          </div>
          <p className="repo-info-owner">{owner.login}</p>

          <p className="repo-info-description">
            {description
              ? description
              : "No description available for this repo"}
          </p>
          <p className="repo-info-languages">&#10148; {languages}</p>

          {/* <a
            className="external-link"
            href={html_url}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            {html_url}
          </a> */}

          <div className="repo-info-dates">
            <p>
              Created: {created_at.split("T")[0].split("-").reverse().join("-")}
            </p>
            <p>
              Updated: {updated_at.split("T")[0].split("-").reverse().join("-")}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Repo;
