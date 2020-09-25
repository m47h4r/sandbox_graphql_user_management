import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_USER_BY_EMAIL = gql`
  query GetUser($email: String!) {
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
  const [getTheUser, { loading, data }] = useLazyQuery(GET_USER_BY_EMAIL, {
    variables: { email: requestedUserEmail },
  });

  return (
    <div>
      <input
        onChange={(event) => setRequestedUserEmail(event.target.value)}
        value={requestedUserEmail}
      ></input>
      <button
        type="button"
        onClick={() => {
          getTheUser();
        }}
      >
        Fetch it!
      </button>
      <pre>{!loading ? JSON.stringify(data, null, 2) : "loading"}</pre>
    </div>
  );
}

export default GetUserByEmail;
