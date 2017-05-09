class Cliente extends Pessoa {
    constructor(nome, dataNascimento, numCartao) {
        super(nome, dataNascimento);
        this.numCartao = numCartao;
    }
}