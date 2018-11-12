"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  usuario: {
    $type: "string"
  },
  clave: {
    $type: "string"
  },
  id_perfil: {
    $type: "string"
  },
  mail: {
    $type: "string"
  },
  nombre: {
    $type: "string"
  },
  fecha_baja: {
    $type: Date
  },
  id_persona: {
    $type: "string"
  },
  publica_en_web: { $type: "string" },
  id_cliente: {
    $type: "string"
  },
  clave_mail: {
    $type: "string"
  },
  firma: {
    $type: "string"
  },
  id_entidad: {
    $type: "string"
  },
  gexusr_id_tipo: {
    $type: "number"
  }
}).compile("UserType");
