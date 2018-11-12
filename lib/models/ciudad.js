"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  ciudad_nombre: { $type: "string" },
  cp: { $type: "number" },
  provincia_id: { $type: "string" }
}).compile("CiudadType");
