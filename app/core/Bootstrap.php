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
		// echo "--:".$url."<br>";
		$last = strripos($url, "/");
		// echo "--:".$last."<br>";
		$url2 = substr($url, 0,$last);
		// echo "--:".$url2."<br>";		
		$param = substr($url, $last+1);
		// echo "--:".$param."<br>";	
		

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
