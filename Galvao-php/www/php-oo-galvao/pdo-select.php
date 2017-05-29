<?php
require '../../autoload.php';

$id = $_GET['id'];

$dsn = 'mysql:dbname=phpconfbr;host=localhost';
$dbn = new PDO($dsn, 'root', '');

$sql = 'select login from usuario where id = :id';

$stmt = $dbn->prepare($sql);

$stmt->bindParam(':id', $id, PDO::PARAM_STR);
$stmt->execute();
// $stmt->bindParam(':senha', $senha, PDO::PARAM_STR);


while($registro = $stmt->fetchObject()) {
    echo $registro->login;
}

$dbn = NULL;