<?php
try {
    $servidor = "localhost:3306"; //localhost, ip ou host
    $banco = "json"; //nome do banco de dados
    $usuario = "root"; //usuario
    $senha = ""; //senha de conexao
    $pdo = new PDO ("mysql:host=$servidor;dbname=$banco;charset=utf8","$usuario","$senha");
} catch (PDOException $e) {
	echo "Erro de Conexão " . $e->getMessage() . "\n";
	exit;
}