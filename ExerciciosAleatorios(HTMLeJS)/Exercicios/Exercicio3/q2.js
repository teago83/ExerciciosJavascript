function tipoTriangulo() {
    if (validarCampos(true) && validarNumero(true)){
        var
        resultado = document.getElementById("txtResultado");
        a = parseFloat(document.getElementById("txtLado1").value);
        b = parseFloat(document.getElementById("txtLado2").value);
        c = parseFloat(document.getElementById("txtLado3").value);
        if (a < (b + c) && b < (a + c) && c < (a + b)) {
            if (a == b && b == c) {
                resultado.value = 'Este é um triângulo equilátero.';
            }
            else if (a == b || a == c || c == b) {
                resultado.value = 'Este é um triângulo isósceles.';
            }
            else {
                resultado.value = 'Este é um triângulo escaleno.';
            }
        }
        else {
            alert("Não é possível formar um triângulo.");
        }
    }
}

function validarCampos() {
    if (document.getElementById("txtLado1").value == ""){
        alert("O primeiro valor não foi informado.");
        document.getElementById("txtLado1").focus();
        return false;
    }
    else if (document.getElementById("txtLado2").value == ""){
        alert("O segundo valor não foi informado.");
        document.getElementById("txtLado2").focus();
        return false;
    }
    else if (document.getElementById("txtLado3").value == ""){
        alert("O terceiro valor não foi informado.");
        document.getElementById("txtLado3").focus();
        return false;
    }
    else {
        return true;
    }
}

function validarNumero() {
    var valor1 = document.getElementById("txtLado1").value;
    var valor2 = document.getElementById("txtLado2").value;
    var valor3 = document.getElementById("txtLado3").value;
    if (isNaN(valor1)) {
        alert("O valor do primeiro campo não é um número.");
        document.getElementById("txtLado1").focus();
        return false;
    }
    if (isNaN(valor2)) {
        alert("O valor do segundo campo não é um número.");
        document.getElementById("txtLado2").focus();
        return false;
    }
    if (isNaN(valor3)) {
        alert("O valor do terceiro campo não é um número.");
        document.getElementById("txtLado3").focus();
        return false;
    }
    else {
        return true;
    }
}