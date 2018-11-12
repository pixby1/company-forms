"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  id_categoria: { $type: "string" },
  id_empresa: {
    $type: "string"
  },
  id_cliente: {
    $type: "string"
  }
}).compile("Category_2Type");
