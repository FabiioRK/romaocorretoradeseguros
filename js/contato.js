function validacao() {
    if (document.form.nome.value == "") {
        alert("Você deve preencher o nome para enviar o formulário");
        return false;
    }
    else if (document.form.email.value == "" || document.form.email.value.indexOf('@') == -1 || document.form.email.value.indexOf('.') == -1) {
        alert("Você deve preencher um e-mail válido para enviar o formulário");
        return false;
    }
    else if (document.form.telefone.value.length < 8) {
        alert("Você deve preencher um número de telefone válido para enviar o formulário");
        return false;
    }
    else if (document.form.assunto.value == "") {
        alert("Você deve preencher o assunto para enviar o formulário")
        return false;
    }
    else if (document.form.mensagem.value == "") {
        alert("Você deve preencher a mensagem para enviar o formulário")
        return false;
    }
}