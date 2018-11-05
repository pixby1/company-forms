"use strict";

const { MongoClient } = require("mongodb");
const api = require("./lib/api");
const body = require("body-parser");
const co = require("co");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const MONGO_URL =
  "mongodb+srv://ricardo-forms:20181996@cluster0-zhsl6.azure.mongodb.net/jiro-freelancer?retryWrites=true";
const PORT = 3000;

co(function*() {
  yield app.prepare();

  console.log(`Connecting to ${MONGO_URL}`);
  const db = yield MongoClient.connect(MONGO_URL);

  const server = express();

  server.use(body.json());
  server.use((req, res, next) => {
    req.db = db.db("jiro-freelancer");
    next();
  });
  server.use("/api", api(db.db("jiro-freelancer")));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT);
  console.log(`Listening on ${PORT}`);
}).catch(error => console.error(error.stack));