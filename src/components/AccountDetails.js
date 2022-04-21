import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import { AiOutlineArrowLeft } from "react-icons/ai";

const AccountDetails = () => {
  const { account } = useContext(MyContext);
  const {
    login,
    name,
    location,
    created_at,
    bio,
    followers,
    avatar_url,
    html_url,
  } = account;

  const navigate = useNavigate();

  return (
    <div className="account">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft />
      </div>
      <div className="account-avatar">
        <img src={avatar_url} alt="avatar" />
      </div>
      <div className="account-info">
        <h2 className="account-info-username">{login}</h2>
        <p className="account-info-name">{name}</p>
        {location && <p className="account-info-location">{location}</p>}

        {
          <p className="account-info-bio">
            {bio
              ? bio
              : `Unfortunately there is no bio available for this account.`}
          </p>
        }
        <a className="external-link" href={html_url} target="_blank">
          {html_url}
        </a>

        <div className="account-info-lastline">
          <p>
            Member since:{" "}
            {created_at &&
              created_at.split("T")[0].split("-").reverse().join("-")}
          </p>
          <p>{followers ? `Followers: ${followers}` : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
