const Archetype = require("archetype-js");
const CategoriasEmpresasType = require("../../models/categoias_empresas");
module.exports = db => async (req, res) => {
  const newCategoryData = new CategoriasEmpresasType(req.body);

  await db.collection("categorias_empresas").insertOne(newCategoryData);

  return { newCategoryData };
};
