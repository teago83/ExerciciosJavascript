//Sei lá por quê, mas o JS dessa questão parou de funcionar do nada. 
//Não importa como eu coloque as senhas, sempre vem um alerta de 'diferentes'.  

function validarSenha() {
    if (validarDados(true)){
        var campoSenha = document.getElementById("txtValor1");
        var campoSenhaConfirma = document.getElementById("txtValor2");
        if (campoSenha == campoSenhaConfirma) {
            alert("As senhas estão iguais!");
            return true;
        }
        else if (campoSenha != campoSenhaConfirma) {
            alert("As senhas estão diferentes!");
            return false;
        }
    }
}

function validarDados() {
    var campo = document.getElementById("txtValor1");
    var campo2 = document.getElementById("txtValor2");
    if (campo.value == "" || campo.value.trim().length == 0) {
        alert("O primeiro campo está vazio.");
        campo.focus;
        return false;
    } 
    else if (campo2.value == "" || campo2.value.trim().length == 0) {
        alert("O segundo campo está vazio.");
        campo2.focus;
        return false;
    }
    else {
        return true;
    }
}
