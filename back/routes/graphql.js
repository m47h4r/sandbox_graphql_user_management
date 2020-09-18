const express = require("express");
const router = express.router();
const debug = require("debug")("back:route-graphql");
const { graphqlHTTP } = require("express-graphql");

router.use("/graphql", graphqlHTTP({}));

module.exports = router;
