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

</head>
<body>
	<div class="container">
		<h1>Listagem com JSON</h1>

        <div id="msg"></div>

		<table class="table table-striped table-hover table-bordered">
            <tread>
                <tr>
                    <td>ID</td>
                    <td width="20%">Imagem</td>
                    <td width="40%">Nome</td>
                    <td width="20%">Valor</td>
                </tr>
            </tread>
		</table>

	</div>

    <script type="text/javascript">
        $(document).ready(function(){
            $.getJSON("../json/produtos.php", function(){

            }).done(function(data){
                $("#msg").html("OK! Dados carreguedes");
                $.each(data, function(key, val) {
                    tabela = "<tr><td>"+val.id+"</td><td>"+val.imagem+"</td><td>"+val.nome+"</td><td>"+val.valor+"</td></tr>"  ;    
                    $("tbody").append(tabela);              
                })                                
            }).fail(function(){
                $("#msg").html("Erro ao carregar");
            });
        })
    </script>
</body>
</html>