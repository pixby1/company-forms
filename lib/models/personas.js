"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  apellido: {
    $type: "string"
  },
  nombre: { $type: "string" },
  mail: { $type: "string" },
  telefono: { $type: "string" },
  telefono2: { $type: "string" },
  voip: { $type: "string" },
  direccion: {
    $type: "string"
  },
  cp: { $type: "string" },
  sexo: { $type: "string" },
  fecha_nacimiento: {
    $type: Date
  },
  id_entidad: {
    $type: "string"
  },
  cargo: {
    $type: "string"
  },
  recibe_mail: {
    $type: "string"
  },
  descripcion: {
    $type: "string"
  },
  id_categoria_contacto1: {
    $type: "string"
  },
  id_categoria_contacto2: {
    $type: "string"
  },
  fecha_alta: {
    $type: Date
  },
  fecha_baja: {
    $type: Date
  },
  id_cliente: {
    $type: "string"
  },
  ciudad: {
    $type: "string"
  },
  procincia: {
    $type: "string"
  },
  pais: {
    $type: "string"
  },
  foto: { $type: "string" },
  interno: {
    $type: "string"
  },
  cv: { $type: "string" },
  empleado: { $type: "number" },
  dni: { $type: "number" },
  estado: { $type: "number" },
  envio: { $type: "number" }
}).compile("PersonasType");
