function valorKwh() {
    if (validarCampos(true) && validarNumero(true)){
        var
        resultado = document.getElementById("txtResultado");
        a = parseFloat(document.getElementById("txtKwh1").value);
        b = parseFloat(document.getElementById("txtKwh2").value);

        valor = a * b;

        if ((a < 200) && (a > 100) && (b > 0)) {
            resultado.value = valor + (valor * 0.25);
            resultado.value = ('O valor total da conta é de R$ ' + resultado.value);
        } 
        else if ((a > 200) && (b > 0)) {
            resultado.value = valor + (valor * 0.50);
            resultado.value = ('O valor total da conta é de R$ ' + resultado.value);
        } 
        else if ((a >= 0) && (b > 0)){
            resultado.value = valor;
            resultado.value = ('O valor total da conta é de R$ ' + resultado.value);
        }
        else {
            alert("Os valores digitados são inválidos.");
        }
    }
}

function validarCampos() {
    if (document.getElementById("txtKwh1").value == ""){
        alert("O primeiro valor não foi informado.");
        document.getElementById("txtKwh1").focus();
        return false;
    }
    else if (document.getElementById("txtKwh2").value == ""){
        alert("O segundo valor não foi informado.");
        document.getElementById("txtKwh2").focus();
        return false;
    }
    else {
        return true;
    }
}

function validarNumero() {
    var valor1 = document.getElementById("txtKwh1").value;
    var valor2 = document.getElementById("txtKwh2").value;
    if (isNaN(valor1)) {
        alert("O valor do primeiro campo não é um número.");
        document.getElementById("txtKwh1").focus();
        return false;
    }
    if (isNaN(valor2)) {
        alert("O valor do segundo campo não é um número.");
        document.getElementById("txtKwh2").focus();
        return false;
    }
    else {
        return true;
    }
}