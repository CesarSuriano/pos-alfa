<?php
	session_start();
	header("Content-type:application/json");

	include "config.php";

	$msg = "";

	if ( $_POST ) {

		$login = $senha = "";

		if ( isset ( $_POST["login"] ) ) $login = trim ( $_POST["login"] );
		if ( isset ( $_POST["senha"] ) ) $senha = md5 ( trim ( $_POST["senha"] ) );

		$sql = "select * from cliente where email = ? limit 1";
		$res = $db->prepare($sql);
		$res->bindParam(1, $login);
		$res->execute();
		$dados = $res->fetch(PDO::FETCH_OBJ);

		if ( empty ( $login ) ) {

			$msg = array("erro"=>1,"mensagem"=>"Preenchao campo usuário");
			
		} else if ( empty ( $dados->id ) ) {

			$msg = array("erro"=>1,"mensagem"=>"Usuário não encontrado");
			
		} else if ( $senha != $dados->senha ) {

			$msg = array("erro"=>1,"mensagem"=>"Senha incorreta");

		} else {

			$msg = array("erro"=>0, "id"=>$dados->id, "nome"=>$dados->nome);
			$_SESSION["usuario"] = array("id"=>$dados->id, "nome"=>$dados->nome);

		}


	} else {

		$msg = array("erro"=>1,"mensagem"=>"Requisição inválida");

	}

	echo json_encode($msg);