"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  provincia_nombre: "string"
}).compile("ProvinciaType");
