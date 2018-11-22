module.exports = db => async (req, res) => {
  const companyList = await db
    .collection("Company")
    .find()
    .toArray();

  return { companyList };
};
