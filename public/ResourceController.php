<?php

include($_SERVER["DOCUMENT_ROOT"]."../app/core/Loader2.php");

$x = new $_POST["controller"];
$x->$_POST["method"]();


?>