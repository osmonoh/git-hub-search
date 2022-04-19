import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

const AccountDetails = () => {
  const { account } = useContext(MyContext);

  return (
    <div>
      <p>ACCOUNT DETAILS: {account.login}</p>
      <p>name: {account.name}</p>
      <img src={account.avatar_url} alt="" />
    </div>
  );
};

export default AccountDetails;
