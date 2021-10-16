// ---------------------------------------------------
//
// Versión fake de una función de la lógica
//
// fecha: Texto  -> obtenerUltimasMediciones() <-
// -> [{valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R}]
//
// ---------------------------------------------------
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

