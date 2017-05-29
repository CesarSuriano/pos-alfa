<?php

class Admin {
    public $usuario;
    public $matricula;

    function __construct(Usuario $usuario) {
        $this->usuario = $usuario;
    }

    function autenticar(){
        $registro = new StdClass();
        $registro->login = 'Cesar';
        $registro->senha = '123';

        if ($this->usuario->login == $registro->login and $this->usuario->senha == $registro->senha) {
            return true;
        } else {
            return false;
        }
    }
}