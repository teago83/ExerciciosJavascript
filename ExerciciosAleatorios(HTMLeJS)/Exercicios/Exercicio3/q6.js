function validarSenha() {
    if (validarDados(true)){
        var campoSenha = document.getElementById("txtValor");
        if (campoSenha.value.length < 3) {
            alert("Segurança fraca.");
        }
        else if (campoSenha.value.length <= 5) {
            alert("Segurança média.");
        }
        else {
            alert("Segurança forte.");
        }
    }
}

function validarDados() {
    var campo = document.getElementById("txtValor");
    if (campo.value == "" || campo.value.trim().length == 0) {
        alert("O campo está vazio.");
        campo.focus;
        return false;
    } 
    else {
        return true;
    }
}