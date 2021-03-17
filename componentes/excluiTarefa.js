const BotaoExclui = () => {
    const botaoExclui = document.createElement('button');

    botaoExclui.classList.add('check-button');
    botaoExclui.innerText = 'Delete';
    botaoExclui.addEventListener('click', excluirTarefa);

    return botaoExclui;
}

const excluirTarefa = (evento) => {
    const botaoExclui = evento.target;

    const tarefaExcluida = botaoExclui.parentElement;

    tarefaExcluida.remove();
}

export default BotaoExclui;