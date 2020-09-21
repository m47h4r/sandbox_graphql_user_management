import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_USERS = gql`
  {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

function GetAllUsers() {
  const { data, loading } = useQuery(GET_ALL_USERS);

  return (
    <div>
      <h2>Get All Users:</h2>
      {!loading
        ? data.getAllUsers.map((user) =>
            Object.keys(user).map((property, index) => (
              <p key={index}>
                {property}: {user[property]}
              </p>
            ))
          )
        : null}
    </div>
  );
}

export default GetAllUsers;
