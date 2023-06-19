const fs = require("fs");

// const citas = [
//   {
//     nomre: "Benito",
//     edad: "1 año",
//     animal: "perro",
//     color: "blanco",
//     enfermedad: "otitis",
//   },
//   {
//     nomre: "Julieta",
//     edad: "6 año",
//     animal: "perro",
//     color: "amarillo",
//     enfermedad: "Moquillo",
//   }
// ];
// fs.writeFileSync("citas.json", JSON.stringify(citas));

// const citas = [];
// fs.writeFileSync("citas.json", JSON.stringify(citas));

// const operaciones = [];
// fs.writeFileSync("operaciones.js", JS.stringify(operaciones));

//Llama los comandos de lectura y escritura de registros.

const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(
  2
);

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === "leer") {
  leer(nombre, edad, animal, color, enfermedad);
}
