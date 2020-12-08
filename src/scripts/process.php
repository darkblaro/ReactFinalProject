<?php 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['files'])) {
        $errors = [];
        $path = '../galleries/';
		$galName=$_POST['galName'];
		$author=$_POST['author'];
        $extensions = ['jpg', 'jpeg', 'png', 'gif'];
		$path.=$author."/".$galName."/";
		//print_r($path);
		if(!is_dir($path))
			mkdir($path,0755,true);

        
		
		$all_files = count($_FILES['files']['tmp_name']);
		opendir($path);

        for ($i = 0; $i < $all_files; $i++) {  
		    $file_name = $_FILES['files']['name'][$i];
		    $file_tmp = $_FILES['files']['tmp_name'][$i];
		    $file_type = $_FILES['files']['type'][$i];
		    $tmp = explode('.', $_FILES['files']['name'][$i]);
		    $file_ext = strtolower(end($tmp));

		    $file = $path . $file_name;

		    if (!in_array($file_ext, $extensions)) {
		    	$errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
		    }

		    if (empty($errors)) {
		    	move_uploaded_file($file_tmp, $file); //file_put_content($file,$file_tmp,FILE_APPEND)
		    }
	    }
		if ($errors) print_r($errors);
		closedir();
    }
}

?>