const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const config = require("./config");
const debug = require("debug")("back:app");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
