$(document).ready(function(){
    //activar campos para registrar cliente
    $('.btn_new_cliente').click(function(e){
        e.preventDefault();
        $('#nom_cliente').removeAttr('disabled');
        $('#tel_cliente').removeAttr('disabled');
        $('#dir_cliente').removeAttr('disabled');

        $('#div_registro_cliente').slideDown();
    });
    $('.idVendedor').click(function(e){
        e.preventDefault();
        $('#nom_cliente').removeAttr('disabled');
       
    });
});//end ready