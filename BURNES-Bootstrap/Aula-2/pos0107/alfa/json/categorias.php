<?php
	header("Content-type:application/json");

	include "config.php";

	$sql = "select * from categoria order by nome ";
	$res = $pdo->prepare($sql);
	$res->execute();
	while ($d = $res->fetch(PDO::FETCH_OBJ)) {
		$dados[$d->id] = $d;
	}

	echo json_encode($dados);