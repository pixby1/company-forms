const Archetype = require("archetype-js");
const CompanyType = require("../../models/company");

module.exports = db => async (req, res) => {
  const newCompanyData = new CompanyType(req.body);

  await db.collection("Company").insertOne(newCompanyData);

  return { newCompanyData };
};
