"use strict";

const Archetype = require("archetype-js");
const CompanyType = require("./models/company");
const { ObjectId } = require("mongodb");
const express = require("express");
const indexControllers = require("./controllers/index-controllers");

module.exports = db => {
  const router = express.Router();

  const wrapAsync = handler => (req, res) =>
    handler(req)
      .then(result => res.json(result))
      .catch(error => res.status(500).json({ error: error.message }));

  router.post("/add-company", wrapAsync(indexControllers.addCompany(db)));
  router.post("/add-category", wrapAsync(indexControllers.addCategory(db)));
  router.post(
    "/update-category",
    wrapAsync(indexControllers.updateCategoriasEmpresas(db))
  );

  router.get("/getCompanyList", wrapAsync(indexControllers.getCompanyList(db)));
  router.get(
    "/getCategoriasEmpresas",
    wrapAsync(indexControllers.getCategoriasEmpresas(db))
  );

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
      await db.collection("Company").insertOne(company);
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
