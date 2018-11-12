"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  ciudad: {
    $required: true,
    $type: "string"
  },
  codigo: {
    $type: "string"
  },
  cp: {
    $type: "number"
  },
  createdAt: {
    $default: new Date(),
    $type: Date
  },
  cuit: {
    $required: true,
    $type: "number"
  },
  descripcion: {
    $type: "string"
  },
  direccion: {
    $required: true,
    $type: "string"
  },
  fax: {
    $type: "string"
  },
  fecha_alta: {
    $default: new Date(),
    type: Date
  },
  fecha_baja: {
    $type: Date
  },
  id_categoria1: {
    $type: "string"
  },
  id_categoria2: {
    $type: "string"
  },
  id_categoria3: {
    $type: "string"
  },
  id_cliente: {
    $type: "string"
  },
  id_owner: {
    $type: "string"
  },
  id_padre: {
    $type: "string"
  },
  mail: {
    $required: true,
    $type: "string"
  },
  nombre: {
    $required: true,
    $type: "string"
  },
  nombre_fantasia: {
    $type: "string"
  },
  pais: {
    $required: true,
    $type: "string"
  },
  pend: {
    $type: "number"
  },
  provincia: {
    $required: true,
    $type: "string"
  },
  recibe_mail: {
    $type: "string"
  },
  rubro: {
    $type: "string"
  },
  telefono: {
    $required: true,
    $type: "string"
  },
  web: {
    $required: true,
    $type: "string"
  },
  ult_actividad: {
    $type: Date
  }
}).compile("CompanyType");
