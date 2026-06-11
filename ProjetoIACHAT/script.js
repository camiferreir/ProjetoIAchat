const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {

    let valor = telefone.value.replace(/\D/g,'');

    valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
    valor = valor.replace(/(\d{5})(\d)/,"$1-$2");

    telefone.value = valor;

});

const campoData = document.getElementById("data");

const hoje = new Date().toISOString().split("T")[0];

campoData.min = hoje;

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const tutor = document.getElementById("tutor").value;
    const pet = document.getElementById("pet").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const servico = document.getElementById("servico").value;

    if(
        tutor === "" ||
        pet === "" ||
        telefone === "" ||
        data === "" ||
        servico === ""
    ){
        alert("Preencha todos os campos.");
        return;
    }

    document.getElementById("mensagem").innerHTML =
        `✅ Agendamento realizado com sucesso para o pet ${pet}!`;

    formulario.reset();

});