const ObjectId = require("mongodb").ObjectId;
module.exports = db => async (req, res) => {
  const updateQuery = Object.assign({}, req.body);
  delete updateQuery._id;
  const updateRes = await db
    .collection("categorias_empresas")
    .updateOne(
      { _id: ObjectId(req.body._id.toString()) },
      { $set: updateQuery }
    );

  return { updateRes };
};
