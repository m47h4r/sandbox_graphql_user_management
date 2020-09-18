const { buildSchema } = require("graphql");
const user = require("./user");

const schema = `
  ${user.schema}
`;

const rootResolver = {
  ...user.resolver,
};

module.exports = {
  schema: buildSchema(schema),
  rootResolver: rootResolver,
};
