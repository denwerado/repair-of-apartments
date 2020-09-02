$(document).ready(function(){
    var button = $('.sucmodbtn');
    var modal = $('#sucmod');
    var close = $('.sucmod-dialog_close');

    button.on('click', function(){
        modal.addClass('sucmod_active');
    });

    close.on('click', function(){
        modal.removeClass('sucmod_active');
    });
});