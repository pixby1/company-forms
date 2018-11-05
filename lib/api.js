"use strict";

const Archetype = require("archetype-js");
const CompanyType = require("./company");
const { ObjectId } = require("mongodb");
const express = require("express");

module.exports = db => {
  const router = express.Router();

  const wrapAsync = handler => (req, res) =>
    handler(req)
      .then(result => res.json(result))
      .catch(error => res.status(500).json({ error: error.message }));

  router.get(
    "/",
    wrapAsync(async function(req) {
      return db
        .collection("Company")
        .find()
        .sort({ createdAt: -1 })
        .toArray();
    })
  );

  router.post(
    "/",
    wrapAsync(async function(req) {
      console.log("hellllo", req.body);
      const company = new CompanyType(req.body);
      const test = await db.collection("Company").insertOne(company);
      console.log("wer;fjafdlas;d", test);
      return { company };
    })
  );

  router.delete(
    "/:id",
    wrapAsync(async function(req) {
      const { result } = await db.collection("Company").deleteOne({
        _id: Archetype.to(req.params.id, ObjectId)
      });
      return { result };
    })
  );

  return router;
};
