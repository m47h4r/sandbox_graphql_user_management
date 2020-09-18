const express = require("express");
const router = express.Router();
const debug = require("debug")("back:route-graphql");
const { graphqlHTTP } = require("express-graphql");

const { schema } = require("../graphql/schema");
const { rootResolver } = require("../graphql/schema");

router.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

module.exports = router;
