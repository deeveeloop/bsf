<?php

/**
	* 
	*/
	class View 
	{
		
		static public function make($view,$id=false)
		{
			$base=$_SERVER["DOCUMENT_ROOT"];
			require($base."../app/views/".$view);
		}
	}	