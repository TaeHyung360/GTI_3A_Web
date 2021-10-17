//--------------------------------------------------------------------------------
// obtenerUltimasMediciones
//
// Autor: Juan Ferrera Sala
// Fecha: 11/10/21
// Descripcion: Descripcion: esta funcion permite obtener las ultimas mediciones con el metodo GET, pasandole un entero
//--------------------------------------------------------------------------------
// ---------------------------------------------------
//
// Versión fake de una función de la lógica
//
// numeroMediciones: n  -> obtenerUltimasMediciones() <-
// -> [{valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R}]
//
// ---------------------------------------------------
/**
 * obtenerUltimasMediciones
 *
 * @param numeroMediciones cantidad de ultimas mediones a publicar
 * @param cb es un callback que contiene el resultado de la operacion
 */
function obtenerUltimasMediociones(numeroMediciones, cb) {

    fetch(IP_PUERTO + "/obtenerUltimasMediciones/"+numeroMediciones, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .catch((err) => console.log('Fetch failed ' + err))
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            cb(data)
        })
}

