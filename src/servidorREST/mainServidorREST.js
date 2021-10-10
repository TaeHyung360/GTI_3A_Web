const express = require( "express" );

require("dotenv").config();

const Logica = require("../logica/Logica.js");

function cargarLogica(database, host, user, password, port, dialect) {

    return new Logica(database, user, password, host, port, dialect);

}

async function main() {

    let laLogica = cargarLogica(
        process.env.DATABASE,
        process.env.DATABASE_HOST,
        process.env.DATABASE_USER,
        process.env.DATABASE_PASSWORD,
        process.env.DATABASE_PORT,
        process.env.DATABASE_DIALECT
    )

    //await laLogica.testConexiones();

    let Medicion = laLogica.cargarModelos();

    let servidorExpress = express();

    servidorExpress.use(express.json());

    servidorExpress.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });

    let reglas = require("./ReglasREST.js");

    reglas.cargar(servidorExpress, laLogica, Medicion);

    let servicio = servidorExpress.listen(process.env.PORT, function () {
        console.log(`Servidor REST escuchando en el puerto ${process.env.PORT}`);
    });

    process.on("SIGINT", function () {
        console.log(" terminando ")
        servicio.close()
    })

}

main();