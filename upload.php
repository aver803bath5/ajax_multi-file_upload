<?php
	$target_dir = "uploads/";
	if (!file_exists($target_dir)) {
		mkdir($target_dir, 0777);
	}
	// for ($i=0; $i < count($_FILES['fileToUpload']['name']); $i++) {

			$sourcePath = $_FILES['fileToUpload']['tmp_name'];
			$targetPath = $target_dir.mb_convert_encoding($_FILES['fileToUpload']['name'],'big5');
			if(move_uploaded_file($sourcePath,$targetPath)) {
				echo $_FILES['fileToUpload']['tmp_name'];
			}else{
				print_r($_FILES);
			}
		// }

?>