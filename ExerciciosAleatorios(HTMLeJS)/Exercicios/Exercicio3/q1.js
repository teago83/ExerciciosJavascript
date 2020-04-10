function validarOperacao() {
    if (document.getElementById("cbxOperacao").value == "") {
        alert("Por favor, selecione uma opção.");
    }
    if (document.getElementById("cbxOperacao").value == "1") {
        if (validarCampos()) {
            somar();
        }
    }
    if (document.getElementById("cbxOperacao").value == "2") {
        if (validarCampos()) {
            subtrair();
        }
    }
    if (document.getElementById("cbxOperacao").value == "3") {
        if (validarCampos()) {
            multiplicar();
        }
    }
    if (document.getElementById("cbxOperacao").value == "4") {
        if (validarCampos()) {
            dividir();
        }
    }
}
function validarCampos() {
    if (document.getElementById("txtValor1").value == "") {
        alert("O primeiro valor não foi informado.");
        document.getElementById("txtValor1").focus();
        return false;
    }
    else if (document.getElementById("txtValor2").value == "") {
        alert("O segundo valor não foi informado.");
        document.getElementById("txtValor2").focus();
        return false;
    } else {
        if (validarNumero()) {
            return true;
        } else {
            return false;
        }
    }
}
function validarNumero() {
    var valor1 = document.getElementById("txtValor1").value;
    var valor2 = document.getElementById("txtValor2").value;
    if (isNaN(valor1)) {
        alert("O valor do primeiro campo não é um número.");
        document.getElementById("txtValor1").focus();
        return false;
    }
    if (isNaN(valor2)) {
        alert("O valor do segundo campo não é um número.");
        document.getElementById("txtValor2").focus();
        return false;
    } else {
        return true;
    }
}
function somar() {
    var valor1 = document.getElementById("txtValor1").value;
    var valor2 = document.getElementById("txtValor2").value;
    var resultado = parseInt(valor1) + parseInt(valor2);
    document.getElementById("txtResultado").value = resultado;
}
function subtrair() {
    var valor1 = document.getElementById("txtValor1").value;
    var valor2 = document.getElementById("txtValor2").value;
    var resultado = parseInt(valor1) - parseInt(valor2);
    document.getElementById("txtResultado").value = resultado;
}
function dividir() {
    var valor1 = document.getElementById("txtValor1").value;
    var valor2 = document.getElementById("txtValor2").value;
    var resultado = parseInt(valor1) / parseInt(valor2);
    document.getElementById("txtResultado").value = resultado;
}
function multiplicar() {
    var valor1 = document.getElementById("txtValor1").value;
    var valor2 = document.getElementById("txtValor2").value;
    var resultado = parseInt(valor1) * parseInt(valor2);
    document.getElementById("txtResultado").value = resultado;
}