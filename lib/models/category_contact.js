"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  nombre: { $type: "string" },
  id_padre: { $type: "string" },
  nivel: { $type: "number" },
  id_cliente: {
    $type: "string"
  }
}).compile("CategoryContactType");
