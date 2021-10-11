// ---------------------------------------------------
//
// Versión fake de una función de la lógica
//
// fecha: Texto  -> obtenerUltimasMediciones() <-
// -> [{valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R}]
//
// ---------------------------------------------------
function obtenerUltimasMediociones(fecha, cb) {

    var datos = { fecha: fecha }

    fetch(IP_PUERTO + "/obtenerUltimasMediciones", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
        .catch((err) => console.log('Fetch failed ' + err))
        .then((res) => res.json())
        .then(function (res) {
            cb(res)
        })
}

