document.addEventListener("DOMContentLoaded", function() {
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
    mensagemErro.textContent = ''; 

    if (!nome || !email || !telefone || !tipoEvento || !data || !numConv || !mensagem) {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        return false; 
    }

    if (!email.match(/^[^@]+@[^@]+\.(com|br)$/)) {
        mensagemErro.textContent = "Por favor, insira um endereço de e-mail válido.";
        return false;
    }

    enviarWhatsApp();
    return false;
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

function enviarWhatsApp() {
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var tipoEvento = document.getElementById("tipoevento").value;
    var dataEvento = document.getElementById("data").value;
    var numConvidados = document.getElementById("numconv").value;
    var mensagem = document.getElementById("mensagem").value;

    var mensagemzap = `\nNome: ${nome} \n Email: ${email} \n Telefone: ${telefone} \n Tipo do Evento: ${tipoEvento} \n Data do Evento: ${dataEvento} \n Número de Convidados: ${numConvidados} \n Mensagem: ${mensagem}`;

    var urlWhatsApp = `https://wa.me/5571996920336?text=${encodeURIComponent("Olá! gostaria de fazer um orçamento para o seguinte evento:" + mensagemzap)}`;
    window.open(urlWhatsApp);
}