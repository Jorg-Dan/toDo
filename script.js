const criarTarefa = (evento) => {
    evento.preventDefault();
    
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const tarefa = document.createElement(`li`);
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoRemove());
    lista.appendChild(tarefa);


    input.value = "";
}


// Evento

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;

}


const concluirTarefa = (evento) => {
    const eventoAcionado = evento.target;
    const tarefaCompleta = eventoAcionado.parentElement;
    tarefaCompleta.classList.toggle('done');

}

const BotaoRemove = () => {
    const botaoRemove = document.createElement('button');

    botaoRemove.classList.add('delete-button');
    botaoRemove.innerText = 'Remover';

    botaoRemove.addEventListener('click', deletaTarefa);
    return botaoRemove;
}

const deletaTarefa = (evente) => {
    const itemRemover = evente.target;
    const itemRemovido = itemRemover.parentElement;

    itemRemovido.remove();
}



