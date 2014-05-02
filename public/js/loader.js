(function(){

	$(document).ajaxStart(function() {
	  $("#loader").css("display","block");
	});

	$(document).ajaxStop(function() {
	  $("#loader").css("display","none");
	  
	});


})();