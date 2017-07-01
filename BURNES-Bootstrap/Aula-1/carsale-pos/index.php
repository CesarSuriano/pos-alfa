<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>CarSale</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Venda de carros">
        <meta name="keywords" content="fiat, 147">

        <!-- facebook - open grapgicss (og) -->
        <meta propertty="og:title" content="Car Sale">
        <meta propertty="og-locale" content="pt_BR">
        <meta propertty="og-locale" content="pt_BR">
        <meta propertty="og-description" content="Venda de carros">
        <meta propertty="og-image" content="http://pos.professorburnes.com.br/carsale2/img/carsale.jpgs">
        <meta propertty="og-image:width" content="800">
        <meta propertty="og-image:height" content="315">

        <!-- twitter cards -->
        <meta name="twitter:url" content="@joseadilson">
        <meta name="twitter:image" content="http://pos.professorburnes.com.br/carsale2/img/carsale.jpgs">
        <meta name="twitter:title" content="Car Sale">

    
        <!-- url base -->
        <base href="http://localhost/Burnes-bootstrap/carsale-pos/" target="">

        <!-- javascript -->
        <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/bootstrap-inputmask.min.js"></script>
        <script type="text/javascript" src="js/jqBootstrapValidation.js"></script>

        <!-- css -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="icon" type="image/png" href="imgs/icone.png">

    </head>
    <body>

    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-6">
                    <a href="index.php"></a>
                    <img src="imgs/logo.png" alt="">                
                </div>
                <div class="col-md-9 col-sm-9 col-xs-6 text-right">
                
                    <i class="fa fa-phone"></i> 2222222222

                    <a href="http://facebook">
                        <i class="fa fa-facebook"></i>
                    </a>     

                    <a href="http://twitter">
                        <i class="fa fa-twitter"></i>
                    </a>

                    <a href="http://instagram">
                        <i class="fa fa-instagram"></i>
                    </a> 
                </div>
            </div>
        </div>
    
    </header>

    <nav class="navbar navbar-default">
        <div class="container-fluid container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                </button>                
            </div>   

            <div id="menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="index.php">Home</a>
                    </li>
                    <li>
                        <a href="sobre">Sobre</a>
                    </li>
                    <li class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">Veiculos</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="nacionais">Nacionais</a>                            
                            </li>
                            <li>
                                <a href="importados">Importados</a>                            
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contato">Contato</a>
                    </li>
                </ul>  

                <form name="form1" class="navbar-form navbar-right">
                    <div class="input-group input-group-lg">
                        <input type="text" name="" value=""placeholder="Buscar..." class="form-control">
                        <div class="input-group-btn">
                            <button type="submit" class="btn btn-default">
                                <i class="fa fa-search"></i>
                            </button>                            
                        </div>
                    </div>
                </form>
                
            </div>
        </div>        
    </nav>

    <div class="banner hidden-xs hidden-ms">
        
    </div>

    <main class="container">
        <?php 

            //print_r($_GET);

            if (isset ($_GET["p"])) {
                //se o parametro p existir
                $p = trim($_GET["p"]);

                //Separar por / produto/111
                //pagina - produto
                //codigo - 111
                $p = explode("/", $p);

                $pagina = $p[0];//Nome da pagina

            } else {
                $pagina = "home";
            }

            $pagina = "pages/$pagina.php";

            if (file_exists($pagina)) 
                include $pagina;
            else
                include "pages/erro.php";

        ?>
    </main>

    <footer>
        <div class="container">
            <div class="row">
                <div class="cal-md-9 col-sm-9">
                    <p><?php echo date("Y"); ?> Desenvolvido por José Adilson - Todos os direitos reservados</p>                
                </div>

                <div class="col-md-3 col-sm-3 text-right">
                    
                    <i class="fa fa-phone"></i> 2222222222

                    <a href="http://facebook">
                        <i class="fa fa-facebook"></i>
                    </a>     

                    <a href="http://twitter">
                        <i class="fa fa-twitter"></i>
                    </a>

                    <a href="http://instagram">
                        <i class="fa fa-instagram"></i>
                    </a> 
                </div>
            </div>
        </div>
    </footer>
    
    </body>
</html>