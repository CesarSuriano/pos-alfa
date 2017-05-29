<?php
//OOALFA
//ger_object_vars(param)
//ger_class_vars(param)

// require '../../class/Usuario.php';
// require '../../class/Admin.php';
require '../../autoload.php';
use Alfa\Usuario;
// $a = new Admin(new Usuario());

// var_dump($a);

$u = new Usuario();

$u->setLogin("Cesar");

echo $u->getLogin();












// $u = new Usuario();
// $u->login = "Cesar";
// $u->senha = "123";

// if($u->autenticar()) {
//     echo "foi";
// } else {
//     echo "Não foi";
// }

//echo '<pre>';
// var_dump($u);
// var_dump($u2);
// var_dump($u3);
// var_dump($u4);