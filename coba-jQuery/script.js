$(document).ready(function() {

    let nama = 'Riki Widiantoro';
    let namaGanti = 'Eren Yeager';

    $('h3').css('textAlign', 'center');
    $('#nama').text(nama);

    $('.klik').click(function() {
        $('.box').fadeToggle(2000);
    });

    $('header span').click(function() {
        alert('Anda berhasil Keluar!');
    });

    $('.ganti').click(function() {
        $('#nama').text(namaGanti);
    });

})