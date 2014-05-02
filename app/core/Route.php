<?php

/**
* Routing
*/
class Route
{
	
	static public function get($route,$controller)
	{
		
		$pos = strpos($controller, '@');
		$controller2 = substr($controller,0, $pos);
		$method = substr($controller, $pos+1);

		// $param = strpos($route, '{');

		// if ($param >0)
		// {
		// 	$routecut = substr($route, 0, $param-1);
		// 	$_SESSION[$routecut.'param']='exist';
		// }


		$_SESSION[$route] = $controller2;
		$_SESSION[$route.'method'] = $method;
	}
}
?> 