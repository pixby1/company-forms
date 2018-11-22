"use strict";

const { MongoClient } = require("mongodb");
const indexApi = require("./lib/index-api");
const body = require("body-parser");
const co = require("co");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const MONGO_URL /* "mongodb://localhost:27017/test"; */ =
  "mongodb+srv://admin:20081991@cluster0-06hco.mongodb.net/company-forms?retryWrites=true";
const PORT = process.env.PORT || 3000;

co(function*() {
  yield app.prepare();

  console.log(`Connecting to ${MONGO_URL}`);
  const db = yield MongoClient.connect(MONGO_URL);

  const server = express();

  server.use(body.json());
  server.use((req, res, next) => {
    req.db = db.db("company-forms");
    next();
  });
  server.use("/api", indexApi(db.db("company-forms")));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT);
  console.log(`Listening on ${PORT}`);
}).catch(error => console.error(error.stack));
