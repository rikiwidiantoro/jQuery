$(document).ready(function() {
    $('#tombol').click(function() {
        $('#modal-box').fadeIn(1500);
        $('#bg').fadeIn(1500);
    });
    $('#close').click(function() {
        $('#modal-box').fadeOut(1000);
        $('#bg').fadeOut(1000);
    });
});