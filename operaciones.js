const { constants } = require("buffer");

const fs = require("fs");

//funcion registrar
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

module.exports = { registrar };

//funcion leer
const leer = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json"));
      console.log(citas);

};

module.exports = { leer };
