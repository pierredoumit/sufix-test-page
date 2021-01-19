$(document).ready(function(){
	
	
	$(".burger_menu_icon").bind('click', function(){
		$("header nav").css({"height":"100%"});
	});
	
	
	$(".close_mobile_menu").bind('click', function(){
		$("header nav").css({"height":"0%"});
	});
	

	
});//$(document).ready(function()

