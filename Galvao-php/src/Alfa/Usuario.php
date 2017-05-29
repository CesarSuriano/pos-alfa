<?php
namespace Alfa;

class Usuario {
    private $id;
    private $login;
    private $senha;
    public  $data_criacao;

    function __construct($login, $senha) {
        $this->login = $login;
        $this->senha = $senha;
    }

    public function salvar(\PDO $pdo) {
        $sql = 'insert into usuario (login, senha) VALUES (:login, :senha)';

        $stmt = $pdo->prepare($sql);
        if ($stmt->execute(array(
            ':login' => $this->login,
            ':senha' => $this->senha
        ))) {
            echo "Cadastrou";
        }
    }

    public function setLogin($login) {
        $this->login = $login;
    }
    public function setSenha($senha) {
        $this->senha = $senha;
    }

    public function getLogin() {
        return $this->login;
    }

    function autenticar(){
        $registro = new StdClass();
        $registro->login = 'Cesar';
        $registro->senha = '123';

        if ($this->login == $registro->login and $this->senha == $registro->senha) {
            return true;
        } else {
            return false;
        }
    }
}