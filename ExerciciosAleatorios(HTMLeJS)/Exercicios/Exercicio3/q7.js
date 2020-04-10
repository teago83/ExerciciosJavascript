function ValidaDia() {
    var campoDia = document.getElementById("dia");
    var campoDiaCorreto = document.getElementById("diaCorreto");

    var valorDia = parseInt(campoDia.value);

    if (isNaN(valorDia) || validarCampoVazio("dia")) {
        campoDia.value = '';
        campoDiaCorreto.value = '';
    }
    else if (valorDia >= 1 && valorDia <= 31) {
        campoDiaCorreto.value = valorDia;
    }
    else {
        campoDiaCorreto.value = "dia inexistente";
    }
}

function ValidaMes() {
    var campoMes = document.getElementById("mes");
    var campoMesCorreto = document.getElementById("mesCorreto");

    var valorMes = parseInt(campoMes.value);

    if (isNaN(valorMes) || validarCampoVazio("mes")) {
        campoMes.value = '';
        campoMesCorreto.value = '';
    }
    else if (valorMes >= 1 && valorMes <= 12) {
        campoMesCorreto.value = valorMes;
    }
    else {
        campoMesCorreto.value = "mes inexistente";
    }
}

function ValidaAno() {
    var campoAno = document.getElementById("ano");
    var campoAnoCorreto = document.getElementById("anoCorreto");

    var valorAno = parseInt(campoAno.value);

    if (isNaN(valorAno) || validarCampoVazio("ano")) {
        campoAno.value = '';
        campoAnoCorreto.value = '';
    }
    else if (valorAno > 1949) {
        campoAnoCorreto.value = valorAno;
    }
    else {
        campoAnoCorreto.value = "ano errôneo";
    }
}

function validarCampoVazio(idCampo) {
    var campo = document.getElementById(idCampo);
    return campo.value == "" || campo.value.trim().length == 0;
}