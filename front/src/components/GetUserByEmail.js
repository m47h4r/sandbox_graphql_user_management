import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_USER_BY_EMAIL = gql`
  query getUser($email: String) {
    getUser(email: $email) {
      firstName
      lastName
      id
      email
      password
    }
  }
`;

function GetUserByEmail() {
  const [requestedUserEmail, setRequestedUserEmail] = useState("");
  const [getTheUser, { data, loading }] = useLazyQuery(GET_USER_BY_EMAIL, {
    variables: { requestedUserEmail },
  });

  return (
    <div>
      <input
        onChange={(event) => setRequestedUserEmail(event.target.value)}
        value={requestedUserEmail}
      ></input>
      <button type="button" onClick={() => getTheUser()}>
        Fetch it!
      </button>
      <div>{!loading ? JSON.stringify(data) : "loading"}</div>
    </div>
  );
}

export default GetUserByEmail;
