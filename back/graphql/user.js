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
    user(email: String): User
  }
`;

const resolver = {
  user: (email) => {
    return User.getByEmail(email);
  },
};

module.exports = {
  schema: schema,
  resolver: resolver,
};
