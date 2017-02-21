<?php
header("Access-Control-Allow-Origin: *");

define('DB_NAME', 		'xxxxxxxx');	// Your database name
define('DB_USER', 		'xxxxxxxx');	// Your database user
define('DB_PASSWORD', 	'xxxxxxxx');	// Your database password
define('DB_HOST', 		'localhost');	// Your server host, default is localhost
define('DB_TABLE', 		'xxxxxxxx');	// Your slider revolution table on database
define('SLIDER_ID', 	'xxxxxxxx');    // Your slider_id from Slider Revolution (check documentaion)

$con = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWORD, 
          array( PDO::ATTR_PERSISTENT => true));

$sql = "SELECT id, params FROM ".DB_TABLE." WHERE slider_id = ".SLIDER_ID;	

$data = array();
foreach ($con->query($sql) as $q) {
	$a = json_decode($q[params]);	
	$tmp['id'] = $q[id];
	$tmp['img'] = $a->image;
	$tmp['params'] = $a->data_attr;
	array_push($data, $tmp);
}

echo json_encode($data);
?>
