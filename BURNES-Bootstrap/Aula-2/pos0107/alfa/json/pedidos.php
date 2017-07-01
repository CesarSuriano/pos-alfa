<?php
	session_start();
	header("Content-type:application/json");

	include "config.php";

	$msg = "";

	if ( !isset ( $_SESSION["usuario"] ) ) {

		$msg = array("erro"=>1,"mensagem"=>"O usuário não está logado");

	} if ( $_POST ) {

		$id = "";
		if ( isset ( $_POST["id"] ) )  $id = trim ( $_POST["id"] );

		$sql = "select *, date_format(data,'%d/%m/%Y') dt from pedido where cliente_id = ? order by data";
		$res = $pdo->prepare($sql);
		$res->bindParam(1, $id);
		$res->execute();
		while ($d = $res->fetch(PDO::FETCH_OBJ)) {
			$d->imagem = "http://pos.professorburnes.com.br/aquiexpress/imgs/".$d->imagem;
			$dados[$d->id] = $d;
		}

	}
	echo json_encode($dados);