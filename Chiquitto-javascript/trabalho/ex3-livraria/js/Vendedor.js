class Vendedor extends Pessoa {
    constructor(nome, dataNascimento, salario) {
        super(nome, dataNascimento);
        this.salario = salario;
    }
}