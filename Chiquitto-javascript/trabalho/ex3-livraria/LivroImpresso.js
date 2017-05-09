class LivroImpresso extends Livro {
    constructor(autor, numPaginas, titulo, valor, enderecoCliente) {
        super(autor, numPaginas, titulo, valor);
        this.enderecoCliente = enderecoCliente;
    }
}