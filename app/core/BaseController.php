<?php

class BaseController
{

	public $db;

	public function __construct()
	{

		$base=$_SERVER["DOCUMENT_ROOT"]."../app/core/";


		$config = include $base."Configuration.php";

		if ( $config['database'] !="")
		{


		try	
		{
			$this->db = new PDO('mysql:host=localhost;dbname='.$config['database'], $config['login'], $config['password']);
		}
		catch(PDOException $e)
		{
			echo "Błąd: ".$e->getMessage();
		}
		}
	}	



}