(function(){




		$o$.run({

			controller: "UserController",
			method: "allUsers",
			template:"users.html",
			target:"#target_div",
			
		});
	



$(document).on("click","#send_button",function(){

		var self= this;

		var user={};
		user.name=$('#name').val();
		user.surname=$('#surname').val();

		$o$.append({

			controller: "UserController",
			method: "addUser",
			template:"user.html",
			target:"#target_div",
			model: user
			
		});
	});


	// $("#start").on("click",function(){

	// 	$o$.run({
	// 		render:"start.html",
	// 		target:"#ajax"
	// 	});
		


	// });


	// $("#kontakt").on("click",function(){

	// 	$o$.run({
	// 		render:"kontakt.html",
	// 		target:"#ajax"
	// 	});
	// });

	// $("#sieci").on("click",function(){

	// 	$o$.run({
	// 		render:"sieci.html",
	// 		target:"#ajax"
	// 	});
	// });


	// $("#programowanie").on("click",function(){

	// 	$o$.run({
	// 		render:"programowanie.html",
	// 		target:"#ajax"
	// 	});
		
	// });


	// $("#tutoriale").on("click", function(){

	// 	$o$.run({
	// 		render:"tutoriale.html",
	// 		target:"#ajax"
	// 	});
	// });



	// $("#place").live("mouseover", function(){

	// 	$(this).animate({
	// 		"padding":"+=40px"},"slow", function(){$(this).stop().animate({"padding":"-=40px"},"slow")});
	// 	})

	
	// $('#ajax').on("click",".tutorials", function(){
	// 	var id=this.id+".html";
	// 	$o$.run({
	// 		render:id,
	// 		target:"#ajax"	

	// 	});
		
	// });
	


	// $o$.live('#inputText','#showText');



	// $(document).on("click",".user",function(){

	// 	self = this;

	// 	$o$.run({

	// 		controller: "UserController",
	// 		method: "saveUser",
	// 		id: self.id,
	// 		template: 'user.html',
	// 		target:"#content"
	// 	});


	// });



// $(document).on("click",".contact",function(){

// 		var self= this;

// 		var tmp="<ul class='dupa'>{{#model}}<li id='{{id}}' class='user'>{{name}} --- {{surname}}</li>{{/model}}</ul>";

// 		$o$.run({

// 			controller: "UserController",
// 			method: "showUsers",
// 			id:['1','2'],
// 			rawTemplate: tmp,
// 			target:"#content",
// 			paginate:false,
// 			paginateId:".dupa",
// 			paginateButtonsId:".alt_page_navigation",
// 			paginateParentId:"#container",
// 			paginatePerPage:1
// 		});
// 	});












	// $(document).on("click", "li[data-class='users']",function(){
	// 	var self= this;
	// 	$o$.find("UserController","showUserById",self.id,"user.html","#content"); 
			
	// });

	// $(document).on("click", ".users",function(){
	// 	var self= this;
	// 	$o$.run("UserController","showUserById",self.id,"user.html","#content"); 
			
	// });

	
	// //form grabber

	// $("#delete").on("click", function(){

	// 	var json = $o$.grab('#content');
			
	// });


})();