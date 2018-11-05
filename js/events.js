$(document).ready(function(){
    // $('#btn1').on('click', function() {
    //     $('#panel1 .panel-body').html('my panel contents has been changed....');
    // });
    // $('#btn2').on('click', function() {
    //     $('#panel2').toggle(200);
    // });
    // $('#btn3').on('click', function() {
    //     $('#panel3').fadeToggle(10000);
    // });
    // $('#btn4').on('click', function() {
    //     $('#panel4').fadeToggle(200);
    // });
    
    var contents = "My new awsome content";
    
    $('.panel-button').on('click', function(){
        var panelid = $(this).attr('data-panelId');
        $('#'+panelid).toggle();
        $('#'+panelid+' .panel-body').html(contents);
    });
    
});