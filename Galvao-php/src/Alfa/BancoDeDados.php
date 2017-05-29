<?php
class BancoDeDados {
    public static $instancia;
    public $usuario;
    public $senha;
    public $host;
    public $base;

    public static function Singleton($usuario, $senha, $host, $base) {
        if(self::$instancia === NULL) {
            $class = __CLASS__;
            self::$instancia = new $class;
        }

        return self::$instancia;
    }

    private function __construct($usuario, $senha, $host, $base) {
        $dsn = 'mysql:dbname=' + $base + ";host=" + $host;
    }
}