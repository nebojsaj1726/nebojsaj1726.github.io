<?php
	function get_data($filename) {
		$return_array = ['data' => ''];

		$json_file = '../data/' . $filename . '.json';

		$results = json_decode(file_get_contents($json_file));

		if(!empty($results)) {
			$return_array['data'] = $results;
		}
		
		return $return_array;
	}

	function add_data($filename, $data) {
		$return_array = ['success' => ''];

		$json_file = '../data/' . $filename . '.json';
		$inp = file_get_contents($json_file);

		if($inp == '') {
			$tempArray[] = $data;
		} else {
			$tempArray = (array) json_decode($inp);
			array_push($tempArray, $data);
		}
		$jsonData = json_encode($tempArray);
		file_put_contents($json_file, $jsonData);

		$return_array['success'] = 'Data added.';
		
		return $return_array;
	}
?>