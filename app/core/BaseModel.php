<?php

class BaseModel
{
	static private $type;
	static private $model;
	static private $paramA;
	static private $paramB;
	static private $operator;
	static private $tab;
	static private $table;
	static private $id;

	static public function save()
	{
		
		$tableNames="";
		$tableValues ="";

		foreach ($_POST['model'] as $key => $value) {
			$tableNames .=$key.",";
			$tableValues .="'".$value."',";
		}

		$tableNames = substr($tableNames, 0, -1);
		$tableValues = substr($tableValues, 0, -1);
		
		$insert = "INSERT INTO ".static::$table."(".$tableNames.") VALUES(".$tableValues.")";
		
		$BaseController = new BaseController;
		$BaseController->db->exec($insert);
		self::$id = $BaseController->db->lastInsertId();
	}

	static public function last()
	{
		self::$type ='last';
		self::$table = static::$table;

		return new BaseModel();	

	}

	static public function byId()
	{
		self::$type = 'byId';
		self::$table = static::$table;
		return new BaseModel();
		
	}

	static public function where($paramA,$operator,$paramB)
	{
		self::$paramA = $paramA;
		self::$paramB = $paramB;
		self::$operator = $operator;
		self::$table = static::$table;
		self::$type = 'where';
		return new BaseModel();	
		
	}		

	
	static public function orderBy($param)
	{
	
		$BaseController = new BaseController;

		switch (self::$type) {
			
			

			case 'byId':
				
				if (is_array($_POST['id'])){

					self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE id IN ('.implode(',',$_POST['id']).') ORDER BY '.$param);
					self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
				}
				else
				{
					self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE id="'.$_POST['id'].'" ORDER BY '.$param);
					self::$model = $model->fetchAll(PDO::FETCH_ASSOC);
				}

				break;
			
			case 'all':

				self::$model = $BaseController->db->query('SELECT * FROM '.self::$table.' ORDER BY '.$param);
				self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
				
				break;

			case 'where':		

				self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE '.self::$paramA.' '.self::$operator.' "'.self::$paramB.'" ORDER BY '.$param);
				self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);

				break;

			default:
				echo "default";
				break;
		
		}

		return json_encode(self::$model);




		// $BaseController = new BaseController;
		
		// self::$model = $BaseController->db->query('SELECT * FROM '.self::$tab.' WHERE '.self::$paramA.' '.self::$operator.' "'.self::$paramB.'"');
		// self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
		// return new BaseModel();
	}




	static public function all()
	{
		
		self::$type ='all';
		self::$table = static::$table;

		return new BaseModel();		
		
	}
	
	static public function get()
	{
		

		$BaseController = new BaseController;

		switch (self::$type) {
			
			

			case 'byId':
				
				if (is_array($_POST['id'])){

					self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE id IN ('.implode(',',$_POST['id']).')');
					self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
				}
				else
				{
					self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE id="'.$_POST['id'].'"');
					self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
				}

				break;
			
			case 'last':

					self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE id="'.self::$id.'"');
					self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
				
				break;
			
			case 'all':

				self::$model = $BaseController->db->query('SELECT * FROM '.self::$table);
				self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);
				
				break;

			case 'where':		

				self::$model = $BaseController->db->query('SELECT * FROM '.static::$table.' WHERE '.self::$paramA.' '.self::$operator.' "'.self::$paramB.'"');
				self::$model = self::$model->fetchAll(PDO::FETCH_ASSOC);

				break;

			default:
				echo "default";
				break;
		
		}

		return json_encode(self::$model);
	}

}

?>