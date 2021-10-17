//--------------------------------------------------------------------------------
// ObetenerTodasLasMediciones
//
// Autor: Juan Ferrera Sala
// Fecha: 11/10/21
// Descripcion: esta funcion permite obtener todas las mediciones con el metodo GET
//--------------------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8081"
// ---------------------------------------------------
//
// Versión fake de una función de la lógica
//
// obtenerTodasMediciones() <-
// -> [{valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R}]
//
// ---------------------------------------------------
/**
 * obtenerTodasLasMediciones
 *
 * @param cb es un callback que contiene el resultado de la operacion
 */
function obtenerTodasLasMediciones(cb) {
    fetch(IP_PUERTO + "/obtenerTodasLasMediciones", {
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
} // ()
