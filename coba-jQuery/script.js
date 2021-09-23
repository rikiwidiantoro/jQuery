$(document).ready(function() {

    let nama = 'Riki Widiantoro';

    $('h3').css('textAlign', 'center');
    $('#nama').text(nama);

    $('button').click(function() {
        $('.box').fadeToggle(2000);
    });

    $('header span').click(function() {
        console.log('ok')
    });

})