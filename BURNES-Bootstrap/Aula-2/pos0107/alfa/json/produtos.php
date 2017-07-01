<?php
	header("Content-type:application/json");

	include "config.php";

	$op = "";
	if ( isset ( $_GET["op"] ) ) $op = trim ( $_GET["op"] );

	if ( empty ( $op ) ) {

		$sql = "select * from produto";
		$res = $pdo->prepare($sql);
		
		
	} else if ( $op == "destaque") {

		$sql = "select * from produto where destaque = 'S' ";
		$res = $pdo->prepare($sql);

	} else if ( $op == "produto") {

		$id = $_GET["id"];

		$sql = "select * from produto where id = ? ";
		$res = $pdo->prepare($sql);
		$res->bindParam(1, $id);

	}

	$res->execute();
	while ($d = $res->fetch(PDO::FETCH_OBJ)) {
		$d->imagem = "<img src='http://pos.professorburnes.com.br/aquiexpress/imgs/".$d->imagem."'>";
		$dados[$d->id] = $d;
	}

	echo json_encode($dados);