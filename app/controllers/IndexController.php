<?php

/**
* 
*/
class IndexController extends BaseController
{
	
	public function start($id=false)
	{
		$base=$_SERVER["DOCUMENT_ROOT"];
		require $base."../app/views/index.php";
	}
}