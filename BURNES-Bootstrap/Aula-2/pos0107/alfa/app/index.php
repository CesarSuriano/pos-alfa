<!DOCTYPE html>
<html>
<head>
	<title>Listagem com JSON</title>
	<meta charset="utf-8">

	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/jquery.dataTables.min.js"></script>

	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css">

	<style type="text/css">
		td img, .row img {
			width: 150px;
		}
		.thumbnail {
			height: 200px;
		}
	</style>

</head>
<body>
	<div class="container">
		<h1>Listagem Normal</h1>

		<table class="table table-striped table-hover table-bordered" id="tabela1">
			<thead>
				<tr>
					<td>ID</td>
					<td width="40%">Produto</td>
					<td width="20%">Valor</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td width="40%">Itubaina</td>
					<td width="20%">3,99</td>
				</tr>
				<tr>
					<td>2</td>
					<td width="40%">Gold Scrin</td>
					<td width="20%">3,90</td>
				</tr>
				<tr>
					<td>3</td>
					<td width="40%">Dollynho</td>
					<td width="20%">1,99</td>
				</tr>
				<tr>
					<td>4</td>
					<td width="40%">Funada</td>
					<td width="20%">2,30</td>
				</tr>
				<tr>
					<td>5</td>
					<td width="40%">Corote</td>
					<td width="20%">1,50</td>
				</tr>
				<tr>
					<td>6</td>
					<td width="40%">Balalayka</td>
					<td width="20%">4,99</td>
				</tr>
				<tr>
					<td>7</td>
					<td width="40%">Natasha</td>
					<td width="20%">5,49</td>
				</tr>
				<tr>
					<td>9</td>
					<td width="40%">Baré Cola</td>
					<td width="20%">2,99</td>
				</tr>
				<tr>
					<td>10</td>
					<td width="40%">Camelinho</td>
					<td width="20%">3,40</td>
				</tr>
				<tr>
					<td>11</td>
					<td width="40%">Jamel</td>
					<td width="20%">3,49</td>
				</tr>
				<tr>
					<td>12</td>
					<td width="40%">Askov Cirtus</td>
					<td width="20%">5,90</td>
				</tr>

			</tbody>
		</table>


		<h1>Listagem com JSON</h1>

		<div id="msg"></div>

		<table class="table table-striped table-hover table-bordered" id="tabela2">
			<thead>
				<tr>
					<td>ID</td>
					<td width="20%">Imagem</td>
					<td width="40%">Nome</td>
					<td width="20%">Valor</td>
				</tr>
			</thead>
			<tbody id="produtos">

			</tbody>
		</table>

		<h1>Carregando em Grid</h1>

		<div class="row">

		</div>

	</div>

	<script type="text/javascript">
		$(document).ready(function(){

			$.getJSON("../json/produtos.php", 
				function() {} 
			).done(function(data){
				$("#msg").html("OK! Dados carregados");

				$.each( data, function (key, val )  {

					tabela = "<tr><td>"+val.id+"</td><td>"+val.imagem+"</td><td>"+val.nome+"</td><td>"+val.valor+"</td></tr>";

					$("#produtos").append(tabela);

					grid = "<div class='col-md-6 text-center'><div class='thumbnail'>"+val.imagem+"<p>"+val.nome+"</p></div></div>";
					$(".row").append(grid);


				})

				tabelar();

			}).fail(function(){
				$("#msg").html("Erro ao carregar dados!");
			});


			function tabelar() {
				$("#tabela1,#tabela2").dataTable({
					"language": {
						"lengthMenu":"Mostrando _MENU_ registros por página",
						"zeroRecords": "Nenhum registro encontrado",
						"info": "Mostrando página _PAGE_ de _PAGES_",
						"infoEmpty": "Nenhum registro encontrado",
						"infoFiltered": "Filtrando de _MAX_ total de registros",
						"search":"Busca: "
					}
				});
			}
		})
	</script>
</body>
</html>