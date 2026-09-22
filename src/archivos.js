const fs = require("node:fs/promises");

async function leerInstrumentosJson(ruta) {

    const datos = await fs.readFile(ruta, "utf8");
    return JSON.parse(datos)

}

module.exports = {
    leerInstrumentosJson
}

