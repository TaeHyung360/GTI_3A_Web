//--------------------------------------------------------------------------------
// ReglasREST
//
// Autor: Juan Ferrera Sala
// Fecha: 9/10/21
// Descripcion: Definicion de todas las reglas REST que se utilizan en la app
//--------------------------------------------------------------------------------
const common = require("mocha/lib/interfaces/common")

module.exports.cargar = function (servidorExpress, laLogica, Medicion) {

    // .......................................................
    // GET /prueba
    // .......................................................
    servidorExpress.get("/prueba", function (peticion, respuesta) {

        console.log(" * GET /prueba ")

        respuesta.send("¡Funciona!")

    }) // get /prueba

    // .......................................................
    // POST /medicion
    // .......................................................
    servidorExpress.post("/medicion", async function (peticion, respuesta) {

        console.log(" * POST /medicion ")

        const data = peticion.body;

        try {
            await laLogica.insertarMedicion(Medicion, data);
            respuesta.sendStatus(201);
        } catch {
            respuesta.sendStatus(400);
        }

    }) // post /medicion

    // .......................................................
    // GET /obtenerTodasLasMediciones
    // .......................................................
    servidorExpress.get("/obtenerTodasLasMediciones", async function (peticion, respuesta) {

        console.log(" * GET /obtenerTodasLasMediciones")

        const mediciones = await laLogica.obtenerTodasLasMediciones(Medicion);
        if (mediciones.length > 0) {
            respuesta.send(mediciones);
        } else {
            respuesta.sendStatus(404);
        }
    }) // get /obtenerTodasLasMediciones

    // .......................................................
    // GET /obtenerUltimasMediciones
    // .......................................................
    servidorExpress.get("/obtenerUltimasMediciones/:numeroDeUltimasMediciones", async function (peticion, respuesta) {

        console.log(" * GET /obtenerUltimasMediciones")

        let numeroDeMediciones;
        
        numeroDeMediciones = parseInt(peticion.params.numeroDeUltimasMediciones,10);
        
        const mediciones = await laLogica.obtenerUltimasMediciones(Medicion,numeroDeMediciones);

        if (mediciones.length > 0) {
            respuesta.send(mediciones).status(200);
        } else {
            respuesta.sendStatus(404);
        }

    }) // get /obtenerTodasLasMediciones
}
