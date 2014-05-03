<?php

function Loader($class)
{
    $base=$_SERVER["DOCUMENT_ROOT"];
    
    if (file_exists($base.'../app/core/'.$class.'.php')) {
        include($base.'../app/core/'.$class.'.php');
        return true;
    }

    if (file_exists($base.'../app/models/'.$class.'.php')) {
        include($base.'../app/models/'.$class.'.php');
        return true;
    }

    if (file_exists($base.'../app/controllers/'.$class.'.php')) {
        include($base.'../app/controllers/'.$class.'.php');
        return true;
    }

    if (file_exists($base.'../app/restcontrollers/'.$class.'.php')) {
        include($base.'../app/restcontrollers/'.$class.'.php');
        return true;
    }
    
    return false;
}

spl_autoload_register('Loader');

?>