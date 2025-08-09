const lista = document.querySelector("[data-list]");

const novaTarefa = document.querySelector("[data-form-button]");

// Criar Tarefa
const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    console.log(valor);
}


// Evento
novaTarefa.addEventListener('click', criarTarefa);










