//Check off specific tasks by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//fade out deleted items
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){ //parent is list item
		$(this).remove();
	});
	event.stopPropagation(); //don't cross out li
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 is equal to enter key
		var todoText = $(this).val(); //grab new item
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});