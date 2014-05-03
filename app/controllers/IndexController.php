<?php

/**
* 
*/
class IndexController extends BaseController
{
	
	public function start($id=false)
	{
		View::make('index.php');
	}
}