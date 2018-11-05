$(document).ready(function() {
	$('body').find('.login_page').hide();
	$('body').on('click','.login_button',function(e){
		$(this).closest('.header').find('.class_name').val();
	});
	
	$('body').on('click','.login_sub',function(e){
		e.preventDefault();
		console.log('asasd');
		window.location.href = "http://stackoverflow.com";
		// window.location.reload();
	});
	


});