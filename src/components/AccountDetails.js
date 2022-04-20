import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const AccountDetails = () => {
  const { account } = useContext(MyContext);
  const { login, name, location, created_at, bio, followers, avatar_url } =
    account;

  return (
    <div>
      <p>username: {login}</p>
      {name && <p>name: {name}</p>}
      {location && <p>Location: {location}</p>}
      <p>
        member since:{" "}
        {created_at && created_at.split("T")[0].split("-").reverse().join("-")}
      </p>
      {bio && <p>bio: {bio}</p>}
      {followers && <p>followers: {followers}</p>}
      <img src={avatar_url} alt="" />
    </div>
  );
};

export default AccountDetails;
