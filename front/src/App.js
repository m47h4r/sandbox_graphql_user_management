import { gql, useQuery } from "@apollo/client";
import React from "react";

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

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
