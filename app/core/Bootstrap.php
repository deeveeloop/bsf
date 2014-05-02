<?php

/**
* Url encode and run class/method/value
*/


include($base.'../app/routes.php');
 
class Bootstrap
{
	

	public function __construct()
	{
		
			
		if (isset($_GET['url']))
		{
			
			$url=$_GET['url'];
		}else
		{
			
			$url='';
		}

		$last = strripos($url, "/");
		$url2 = substr($url, 0,$last);
		$param = substr($url, $last+1);
		if(isset($_SESSION[$url2."/{id}"]))
		{
			
			
			$controller = new $_SESSION[$url2."/{id}"];
			$controller->$_SESSION[$url2.'/{id}method']($param);


		}else
		 
		if(isset($_SESSION[$url]) || isset($_SESSION[$url."/"]))
		{
			
			
			$controller = new $_SESSION[$url];
			$controller->$_SESSION[$url.'method']();
		

			}
		

	}
}
