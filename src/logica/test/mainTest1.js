//--------------------------------------------------------------------------------
// mainTest1
//
// Autor: Juan Ferrera Sala
// Fecha: 11/10/21
// Descripcion: Test para comprobar que la app funciona
//--------------------------------------------------------------------------------
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
            assert.equal(new Date(solucion[0].fecha).toString(), "Fri Oct 15 2021 13:09:25 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-15")
            assert.equal(new Date(solucion[1].fecha).toString(), "Mon Oct 11 2021 13:08:57 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-11?")
            assert.equal(new Date(solucion[2].fecha).toString(), "Tue Oct 19 2021 13:09:51 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-19?")
            hecho()

        } // callback

    ) // .get


    }) // it

    // ....................................................
    // ....................................................
    
    it("probar GET /obtenerUltimasMediciones", function (hecho) {

        request.get({ url : IP_PUERTO+"/obtenerUltimasMediciones/"+2,

        headers : { "User-Agent" : "juan" }},

        function( err, respuesta, carga ) {

            assert.equal( err, null, "¿ha habido un error?" )
            assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )

            var solucion = JSON.parse( carga )
            assert.equal(solucion.length, 2, "No da 2 elementos")
            assert.equal(new Date(solucion[0].fecha).toString(), "Tue Oct 19 2021 13:09:51 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-19")
            assert.equal(new Date(solucion[1].fecha).toString(), "Fri Oct 15 2021 13:09:25 GMT+0200 (hora de verano de Europa central)", "¿La fecha no es 2021-10-11?")
            hecho()

        } // callback

    ) // .get


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