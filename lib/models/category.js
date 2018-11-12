"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  nombre: {
    $type: "string"
  },
  id_padre: {
    $type: "number"
  },
  nivel: {
    $type: "number"
  },
  id_cliente: {
    $type: "string"
  }
}).compile("CategoryType");
