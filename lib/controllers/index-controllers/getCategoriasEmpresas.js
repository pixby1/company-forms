module.exports = db => async (req, res) => {
  const categoriasEmpresasList = await db
    .collection("categorias_empresas")
    .find()
    .toArray();

  categoriasEmpresasList.sort((a, b) => {
    if (a.nivel === b.nivel) {
      return a._id - b._id;
    } else {
      return a.nivel - b.nivel;
    }
  });

  return { categoriasEmpresasList };
};
