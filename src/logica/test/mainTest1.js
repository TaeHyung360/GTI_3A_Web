// ........................................................
// mainTest1.js
// ........................................................
// ........................................................
const IP_PUERTO = "http://localhost:8081"
var request = require ("request")
var assert = require ("assert")
// ........................................................
// main ()
// ........................................................
describe("Test 1, prueba de todos los GET y POST", function () {

    it( "probar que GET /prueba responde ¡Funciona!", function( hecho ) {

        request.get({ url : IP_PUERTO+"/prueba", headers : { "User-Agent" : "juan" }},

            function( err, respuesta, carga ) {

                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal( carga, "¡Funciona!", "¿La carga no es ¡Funciona!?" )

                hecho()

            }

        ) // .get

    }) // it
    // ....................................................
    // ....................................................
    it("probar GET /obtenerTodasLasMediciones", function (hecho) {

        request.get({ url : IP_PUERTO+"/obtenerTodasLasMediciones",

        headers : { "User-Agent" : "juan" }},

        function( err, respuesta, carga ) {

            assert.equal( err, null, "¿ha habido un error?" )
            assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )

            var solucion = JSON.parse( carga )
            assert.equal(new Date(solucion[0].fecha).toString(), "Tue Oct 05 2021 15:55:32 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-05 15:55:32.000Z?")
            assert.equal(new Date(solucion[1].fecha).toString(), "Wed Oct 06 2021 16:18:17 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-12?")
            assert.equal(new Date(solucion[2].fecha).toString(), "Tue Oct 12 2021 16:21:02 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-12?")
            hecho()

        } // callback

    ) // .get


    }) // it

    // ....................................................
    // ....................................................
    
    it("probar POST /obtenerUltimasMediciones", function (hecho) {

        var datos = { fecha: "2021-10-5" }

        request.post({ url : IP_PUERTO+"/obtenerUltimasMediciones",

            headers : { "User-Agent" : "juan" , "Content-Type" : "application/json" },

            body : JSON.stringify( datos )

            },

            function( err, respuesta, carga ) {

                var solucion = JSON.parse( carga )

                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal(new Date(solucion[1].fecha).toString(), "Wed Oct 06 2021 16:18:17 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-12?")
                assert.equal(new Date(solucion[2].fecha).toString(), "Tue Oct 12 2021 16:21:02 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-12?")
                hecho()

            } // callback

        ) // .post

    }) // it

    // ....................................................
    // ....................................................
    it("probar POST /medicion", function (hecho) {

        var datos = {idUsuario:"1",valor:"55",fecha:"2021-10-22T22:01:00.000Z",idSensor:"1",latitud:"3",longitud:"3"}

        request.post({ url : IP_PUERTO+"/medicion",

            headers : { "User-Agent" : "juan" , "Content-Type" : "application/json" },

            body : JSON.stringify( datos )

            },

            function( err, respuesta, carga ) {

                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 201, "¿El código no es 201 (OK)" )
                hecho()

            } // callback

        ) // .post

    }) // it

}) // describe