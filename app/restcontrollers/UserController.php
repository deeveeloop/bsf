<?php

Class UserController extends BaseController
{

	public function addUser()
	{
		User::save();
		echo User::last()->get();
	}

	public function allUsers()
	{
		echo User::all()->get();
	}



} 

?>