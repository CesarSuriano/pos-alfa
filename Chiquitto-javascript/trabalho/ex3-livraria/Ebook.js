class Ebook extends Livro {
    constructor(autor, numPaginas, titulo, valor, emailCliente) {
        super(autor, numPaginas, titulo, valor);
        this.emailCliente = emailCliente;
    }
}