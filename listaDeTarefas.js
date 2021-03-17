(() => {

    const criarTarefa = (evento) => {
        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector("[data-form-input]");
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');

        const conteudo = `<p class="content">${valor}</p>`;

        tarefa.innerHTML = conteudo;
        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoExclui());
        lista.appendChild(tarefa);

        input.value = " ";

    }


    const novaTarefa = document.querySelector("[data-form-button]");

    novaTarefa.addEventListener('click', criarTarefa);

    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button');

        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'Concluir';
        botaoConclui.addEventListener('click', concluirTarefa);

        return botaoConclui;
    }

    const BotaoExclui = () => {
        const botaoExclui = document.createElement('button');

        botaoExclui.classList.add('check-button');
        botaoExclui.innerText = 'Delete';
        botaoExclui.addEventListener('click', excluirTarefa);

        return botaoExclui;
    }

    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target;

        const tarefaCompleta = botaoConclui.parentElement;

        tarefaCompleta.classList.toggle('done');
    }

    const excluirTarefa = (evento) => {
        const botaoExclui = evento.target;

        const tarefaExcluida = botaoExclui.parentElement;

        tarefaExcluida.remove();
    }


})()