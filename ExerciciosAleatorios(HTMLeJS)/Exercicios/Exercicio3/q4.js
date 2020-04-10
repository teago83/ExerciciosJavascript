function copiarValor() {
    if (validarDados(true)){
        var valor = document.getElementById("txtValor");
        var valorCopia = document.getElementById("txtValorCopia");
            if (!validarCampoVazio("txtValor")) {
                valorCopia.value = valor.value;
            }
    }
}
function validarCampoVazio(idCampo) {
    var campo = document.getElementById(idCampo);
    return campo.value == "" || campo.value.trim().length == 0;
}

function validarDados() {
    var campo = document.getElementById("txtValor");
    if (campo.value == "" || campo.value.trim().length == 0) {
        alert("O campo está vazio.");
        campo.focus;
        return false;
    } else {
        return true;
    }
}
