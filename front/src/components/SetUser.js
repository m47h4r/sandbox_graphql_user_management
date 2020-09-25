import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const SET_USER = gql`
  mutation SetUser(
    $firstName: String
    $lastName: String
    $email: String!
    $password: String!
  ) {
    setUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

function SetUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { data }] = useMutation(SET_USER);

  function handleChange(e) {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={(e) => {
        e.preventDefault();
        addUser({
          variables: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          },
        });
      }}
    >
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleChange}
      ></input>
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={handleChange}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        required
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        required
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
      <pre>data returned: {JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}

export default SetUser;
