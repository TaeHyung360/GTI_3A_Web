// ---------------------------------------------------
//
// versión fake de una función de la lógica
//
// dni:Texto, obtenerPersonaDNI() -> nombre:texto
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

