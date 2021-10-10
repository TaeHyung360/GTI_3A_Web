const IP_PUERTO = "http://localhost:8081"
// ---------------------------------------------------
//
// versión fake de una función de la lógica
//
// dni:Texto, obtenerPersonaDNI() -> nombre:texto
//
// ---------------------------------------------------
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
