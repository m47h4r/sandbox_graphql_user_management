const User = require("../models/User");

const schema = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    session: String
  }

  type Query {
    getUser(email: String): User
  }

  type Mutation {
    setUser(
      firstName: String,
      lastName: String,
      email: String,
      password: String
    ): User
  }
`;

const resolver = {
  getUser: (email) => {
    return User.getByEmail(email);
  },
  setUser: ({ firstName, lastName, email, password }) => {
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    return newUser.save();
  },
};

module.exports = {
  schema: schema,
  resolver: resolver,
};
