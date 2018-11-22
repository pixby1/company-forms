"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  nombre: { $type: "string", $required: true },
  id_padre: { $type: "string" },
  nivel: { $type: "number", $required: true, $default: 0 },
  id_cliente: {
    $type: "string"
  }
}).compile("CategoriasEmpresasType");
