<?php
	include 'functions.php';

	$comment = (array) json_decode(key($_POST));
	
	echo json_encode(add_data('comments', $comment));
?>