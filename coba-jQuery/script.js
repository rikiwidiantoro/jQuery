$(document).ready(function() {

    let nama = 'Riki Widiantoro';
    let eren = 'Eren Yeager';
    let levi = 'Levi Ackerman';


    $('h3').css('textAlign', 'center');
    // $('#nama').text(nama);

    $('.klik').click(function() {
        $('.box').fadeToggle(2000);
    });

    $('header span').click(function() {
        alert('Anda berhasil Keluar!');
    });

    $('.eren').click(function() {
        $('#nama').text(eren);
    });
    $('.levi').click(function() {
        $('#nama').text(levi);
    });
    $('.riki').click(function() {
        $('#nama').text(nama);
    });

    if(true) {
        $('#bgk').click(function() {
            $('body').css({
                'backgroundColor': 'darkBlue',
                'color': 'white'
            });
            $('header').css({
                'backgroundColor': 'Blue',
                'color': 'white'
            });
        });
    } else {

    }

})