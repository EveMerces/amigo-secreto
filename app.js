document.addEventListener("DOMContentLoaded", function () {
    let listaDeAmigos = [];

    const botaoAdicionar = document.querySelector(".button-add");
    const botaoSortear = document.querySelector(".button-draw");

    // Evento de clique para adicionar amigo
    botaoAdicionar.addEventListener("click", function () {
        const campoEntrada = document.getElementById("amigo");
        const nomeAmigo = campoEntrada.value.trim();

        if (nomeAmigo === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        listaDeAmigos.push(nomeAmigo);
        atualizarListaAmigos();
        campoEntrada.value = ""; // Limpa o campo de entrada
    });

    // Atualiza a lista de amigos na tela
    function atualizarListaAmigos() {
        const containerLista = document.getElementById("listaAmigos");
        containerLista.innerHTML = ""; // Limpa a lista antes de atualizar

        listaDeAmigos.forEach((amigo) => {
            const itemLista = document.createElement("li");
            itemLista.textContent = amigo;
            containerLista.appendChild(itemLista);
        });
    }

    // Evento de clique para sortear amigo
    botaoSortear.addEventListener("click", function () {
        if (listaDeAmigos.length < 2) {
            alert("É necessário pelo menos 2 amigos para o sorteio!");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        const amigoSorteado = listaDeAmigos[indiceAleatorio];
        document.getElementById("resultado").textContent = `Amigo sorteado: ${amigoSorteado}`;
    });
});
