"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  id_categoria: { $type: "string" },
  id_contacto: { $type: "string" },
  id_cliente: { $type: "string" }
}).compile("CategoryContact2Type");
