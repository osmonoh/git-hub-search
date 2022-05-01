import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import gitHub from "../api/gitHub";
import Repo from "./Repo";

import { GoSearch } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const { term, setTerm } = useContext(MyContext);
  const { lastTerm, setLastTerm } = useContext(MyContext);
  const { repos, setRepos } = useContext(MyContext);
  const { count, setCount } = useContext(MyContext);
  const { page, setPage } = useContext(MyContext);
  const { totalPages, setTotalPages } = useContext(MyContext);

  const onPageLoad = async () => {
    if (repos.length) return;
    if (!term) setTerm(lastTerm);
    setLoading(true);
    const response = await gitHub.get("/search/repositories", {
      params: {
        q: term,
      },
    });
    setRepos(response.data.items);
    setCount(response.data.total_count);
    setTotalPages(Math.ceil(response.data.total_count / 5));
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
      sessionStorage.setItem("lastTerm", lastTerm);

      const response = await gitHub.get("/search/repositories", {
        params: {
          q: term,
        },
      });
      setRepos(response.data.items);
      setCount(response.data.total_count);
      setTotalPages(Math.ceil(response.data.total_count / 5));
      setPage(2);
      setLoading(false);
    }
  };

  const onMoreResultsClick = async () => {
    setLoadingMore(true);
    const response = await gitHub.get("/search/repositories", {
      params: {
        q: term,
        page: page,
      },
    });
    setRepos([...repos, ...response.data.items]);
    setPage(page + 1);
    setLoadingMore(false);
  };

  // console.log(repos);

  return (
    <div className="search">
      <form className="search-form" onSubmit={(e) => onFormSubmit(e)}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              setLastTerm(e.target.value);
            }}
          />

          <div className="buttons">
            <button
              className="btn-close"
              type="reset"
              onClick={() => setTerm("")}
            >
              {<VscChromeClose />}
            </button>
            <span className="divider"></span>
            <button className="btn-search" type="submit">
              {<GoSearch />}
            </button>
          </div>
        </div>

        <p className="results-number">
          {loading ? `Loading...` : `${count} results`}
        </p>
      </form>

      {count === 0 && <p className="no-matches">No matches were found.</p>}

      <div className="repos-list">
        {repos.map((item) => {
          return <Repo repo={item} key={item.id} />;
        })}
      </div>

      {page <= totalPages && (
        <button
          className="btn-more-results"
          onClick={() => onMoreResultsClick()}
        >
          {loadingMore ? "Loading..." : "More results"}
        </button>
      )}
    </div>
  );
};

export default Search;
