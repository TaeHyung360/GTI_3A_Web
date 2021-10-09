module.exports.cargar = function( servidorExpress, laLogica, Medicion ) {

    // .......................................................
    // GET /prueba
    // .......................................................
    servidorExpress.get("/prueba",function( peticion, respuesta ){

        console.log( " * GET /prueba " )

        respuesta.send( "¡Funciona!" )

    }) // get /prueba

    // .......................................................
    // POST /medicion
    // .......................................................
    servidorExpress.post("/medicion", async function( peticion, respuesta ){

        console.log( " * POST /medicion " )

        const data = peticion.body;

        try{
            await laLogica.insertarMedicion(Medicion,data);
            respuesta.sendStatus(201);
        }catch{
            respuesta.sendStatus(404);
        }

    }) // post /medicion

    // .......................................................
    // GET /obtenerTodasLasMediciones
    // .......................................................
    servidorExpress.get("/obtenerTodasLasMediciones",async function( peticion, respuesta ){

        console.log( " * GET /obtenerTodasLasMediciones" )
        
        const mediciones = await laLogica.obtenerTodasLasMediciones(Medicion);
        if(mediciones.length>0){
            respuesta.send(mediciones);
        }else{ 
            respuesta.sendStatus(404);
        }
    }) // get /obtenerTodasLasMediciones

    // .......................................................
    // POST /obtenerUltimasMediciones
    // .......................................................
    servidorExpress.post("/obtenerUltimasMediciones",async function( peticion, respuesta ){
        const fecha = peticion.body.fecha;
        if(fecha!=null){
            const mediciones = await laLogica.obtenerUltimasMediciones(Medicion,fecha);
            if(mediciones.length>0){
                respuesta.send(mediciones).status(200);
            }else{ 
                respuesta.sendStatus(404);
            }
        }else{
            respuesta.sendStatus(400);
        }
    }) // post /obtenerUltimasMediciones
}
