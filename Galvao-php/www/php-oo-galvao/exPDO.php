<?php
require '../../autoload.php';

use Alfa\Usuario;

$login = $_GET['login'];
$senha = $_GET['senha'];

$dsn = 'mysql:dbname=phpconfbr;host=localhost';
$dbn = new PDO($dsn, 'root', '');

$u = new Usuario($login, $senha);

$u->salvar($dbn);