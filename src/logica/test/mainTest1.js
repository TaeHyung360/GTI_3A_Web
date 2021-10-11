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

            assert.equal( solucion[0].fecha, "2021-10-10", "¿La fecha no es 2021-10-10?")
            assert.equal( solucion[1].fecha, "2021-10-12", "¿La fecha no es 2021-10-12?")
            assert.equal( solucion[2].fecha, "2021-10-12", "¿La fecha no es 2021-10-12?")
            hecho()

        } // callback

    ) // .get


    }) // it

    // ....................................................
    // ....................................................
    it("probar POST /obtenerUltimasMediciones", function (hecho) {

        var datos = { fecha: "2021-10-9" }

        request.post({ url : IP_PUERTO+"/obtenerUltimasMediciones",

            headers : { "User-Agent" : "juan" , "Content-Type" : "application/json" },

            body : JSON.stringify( datos )

            },

            function( err, respuesta, carga ) {

                var solucion = JSON.parse( carga )

                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal(solucion[0].fecha, "2021-10-10", "¿La fecha no es 2021-10-10?")
                assert.equal(solucion[1].fecha, "2021-10-12", "¿La fecha no es 2021-10-12?")
                assert.equal(solucion[2].fecha, "2021-10-12", "¿La fecha no es 2021-10-12?")
                hecho()

            } // callback

        ) // .post

    }) // it

    // ....................................................
    // ....................................................
    it("probar POST /medicion", function (hecho) {

        var datos = {idUsuario:"1",valor:"55",fecha:"2021-10-20",idSensor:"1",latitud:"3",longitud:"3"}

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