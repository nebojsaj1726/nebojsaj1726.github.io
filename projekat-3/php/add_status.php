<?php
	include 'functions.php';

	$status = (array) json_decode(key($_POST));
	
	echo json_encode(add_data('statuses', $status));
?>