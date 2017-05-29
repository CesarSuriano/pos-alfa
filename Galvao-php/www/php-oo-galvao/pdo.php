<?php
require '../../autoload.php';

$login = $_GET['usuario'];
$senha = $_GET['senha'];

$dsn = 'mysql:dbname=phpconfbr;host=localhost';
$dbn = new PDO($dsn, 'root', '');

$sql = 'insert into usuario (login, senha) VALUES (:login, :senha)';

$stmt = $dbn->prepare($sql);

// $stmt->bindParam(':login', $login, PDO::PARAM_STR);
// $stmt->bindParam(':senha', $senha, PDO::PARAM_STR);

$stmt->execute(array(
    ':login' => $login,
    ':senha' => $senha
));


$dbn = NULL;