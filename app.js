document.addEventListener('DOMContentLoaded', function() {
    setearValores();
});

let miBoton = document.getElementById("btnactualizar");
miBoton.addEventListener("click", actualizarCantidad);


function setearValores() {
    let ceramicos = [9866,9753,3994,3786,3852,3486,3666,3999,3876,3891];
    for (let i = 0; i < ceramicos.length; i++) {
        let miInput = document.getElementById(i);
        miInput.value = ceramicos[i];
    }
}

function actualizarCantidad(id) {
    let valor = document.getElementById(id).value;
    let m2 = document.getElementById(id +"_m2").value;
    let cotizacion = valor*m2
    document.getElementById(id + "_cotizacion").value = cotizacion; // muestra la cotizacion en el campo "Cotizacion"
};