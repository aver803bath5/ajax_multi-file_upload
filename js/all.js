$(document).ready(function (e) {
    $('#upload_file').on('change',(function(e) {
  	e.preventDefault();
  	for (var i = 0 ; i < $('#upload_file')[0].files.length; i++) {
  			console.log(i);
		       	var data =  $('#upload_file')[0].files[i];
		       	var form_data = new FormData(this);
		       	form_data.append("fileToUpload", data);
		       	console.log(data);
		        	$.ajax({
			    url: 'upload.php',
			    data: form_data,
			    cache: false,
			    contentType: false,
			    processData: false,
			    type: 'POST',
			    success: function(data){
			    	console.log(data);
				}
			});
  		}
    }));
});