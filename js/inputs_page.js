$(document).ready(function() {
	$('body').on('click','.btn_sbm',function(e){
        e.preventDefault();
        var firstname = $(this).closest('.container').find('.f_n').val();
        var lastname = $(this).closest('.container').find('.l_n').val();
        var fathername = $(this).closest('.container').find('.fat_n').val();
        var mothername = $(this).closest('.container').find('.mot_n').val();
        var email = $(this).closest('.container').find('.email').val();
        var phone = $(this).closest('.container').find('.phone').val();
        var address = $(this).closest('.container').find('.address').val();
		
        $('#given_inputs').show();
        $('#name').append(firstname+lastname);
        $('#father_name').append(fathername);
        $('#mother_name').append(mothername);
        $('#given_mail').append(email);
        $('#given_phone').append(phone);
        $('#given_address').append(address);
        
		
		//$(this).closest('.container').find('.parent_level').clone().last().appendTo('.container');
		
		
    });
	
	// $('body').on('click','.remove_btn',function(e){
	// 	var abc=$('body').find('.parent_level').length;
	// 	console.log(abc);
    //    if(abc>1)
	//    {
    //    $(this).closest('.parent_level').remove();
	//    }
    // });

});