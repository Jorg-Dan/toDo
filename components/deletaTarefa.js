
const BotaoRemove = () => {
    const botaoRemove = document.createElement('button');

    botaoRemove.classList.add('delete-button');
    botaoRemove.innerText = 'deletar';

    botaoRemove.addEventListener('click', deletarTarefa);
    return botaoRemove;
};

const deletarTarefa = (evento) => {
    const itemRemover = evento.target;
    const itemRemovido = itemRemover.parentElement;
    itemRemovido.remove();
    
};

export default BotaoRemove;
