$(document).ready(function() {
	$('body').on('click','.btn_sbm1',function(e){
        e.preventDefault();
        var firstname = $(this).closest('.container').find('.f_n').val();
        console.log(firstname);
        var lastname = $(this).closest('.container').find('.l_n').val();
        console.log(lastname);
        var fathername = $(this).closest('.container').find('.fat_n').val();
        console.log(fathername);
        var mothername = $(this).closest('.container').find('.mot_n').val();
        console.log(mothername);
    });
    $('body').on('click','.btn_sbm2',function(e){
        e.preventDefault();
        var email = $(this).closest('.container').find('.email').val();
        console.log(email);
        var phone = $(this).closest('.container').find('.phone').val();
        console.log(phone);
    });
    $('body').on('click','.btn_sbm3',function(e){
        e.preventDefault();
        var address = $(this).closest('.container').find('.address').val();
        console.log(address);
    });
	


});