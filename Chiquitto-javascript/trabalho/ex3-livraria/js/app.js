let titulo = "";
let valor = "";
let autor = "Zé";
let numPaginas = 200;
let clickImg = (livro) => {
    titulo = livro.getElementsByTagName('a')[0].getAttribute('data-titulo');
    valor = livro.getElementsByTagName('a')[0].getAttribute('data-valor');
    document.getElementById("livros").style.display = "none";
    document.getElementById("informacoes").style.display = "block";
}

let enviarInformacoes = () => {
    let nomeCliente = document.getElementById("nome").value;
    let nascimentoCliente = document.getElementById("dataNascimento").value;
    let emailCliente = document.getElementById("email").value;
    let cartaoCliente = document.getElementById("cartao").value;

    let venda  = new Venda(Date.now, valor);
    let cliente = new Cliente(nomeCliente, nascimentoCliente, cartaoCliente);
    let livro = new Ebook(autor, numPaginas, titulo, valor, emailCliente);

    alert("Livro " + livro.titulo + " vendido para: " + cliente.nome + " no valor total de " + venda.valorTotal);
}