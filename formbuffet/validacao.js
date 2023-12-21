document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o manipulador de eventos ao formulário
    document.getElementById("meuFormulario").onsubmit = function() {
        return validarFormulario();
    };
});

function validarFormulario() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var tipoEvento = document.getElementById("tipoevento").value.trim();
    var data = document.getElementById("data").value.trim();
    var numConv = document.getElementById("numconv").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    var mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.textContent = ''; // Limpa mensagens de erro anteriores

    // Verifica se os campos estão vazios
    if (!nome || !email || !telefone || !tipoEvento || !data || !numConv || !mensagem) {
        mensagemErro.textContent = "Por favor, preencha todos os campos obrigatórios.";
        return false; // Impede o envio do formulário
    }

    // Validação do email
    if (!email.match(/^[^@]+@[^@]+\.(com|br)$/)) {
        mensagemErro.textContent = "Por favor, insira um endereço de e-mail válido.";
        return false;
    }

    // Validação do telefone
    if (!telefone.match(/^\(\d{2}\) 9 \d{4}-\d{4}$/)) {
        mensagemErro.textContent = "Por favor, insira um número de telefone no formato (XX) 9 XXXX-XXXX.";
        return false;
    }

    return true;
}

function formatarTelefone() {
    var telefone = document.getElementById("telefone").value;
    
    telefone = telefone.replace(/\D/g, "").substring(0, 11);

    if (telefone.length >= 11) {
        telefone = telefone.replace(/^(\d{2})(\d)(\d{4})(\d{4})$/, "($1) $2 $3-$4");
    } else if (telefone.length >= 7) {
        telefone = telefone.replace(/^(\d{2})(\d)(\d{4})/, "($1) $2 $3-");
    } else if (telefone.length >= 3) {
        telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2 ");
    }

    document.getElementById("telefone").value = telefone;
}