(function(){

$o$.run({
	controller: "CommentController",
	method: "ShowComments03",
	template:'commentsall.html',
	target:"#comments"	
});

$(document).on("click","#wyslij",function(){

		
		if ($('#botcompare').val() == '2')
		{
		$('#botcompare').val('')
		self = this;

		var user={};
		user.name=$('#nick').val();
		user.comment=$('#comment').val();
		user.tutorial='tut03';
		$o$.append({

			controller: "CommentController",
			method: "AddComment",
			id: self.id,
			model:user,
			template: 'comment.html',
			target:"#comments"
		});
		}
		else
		{
			$('#botcompare').val('Zła odpowiedz :(')
		}


	});


})()
