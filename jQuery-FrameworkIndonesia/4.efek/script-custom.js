$(document).ready(function() {
    $('h1').css('textTransform', 'uppercase');


    // animate()
    $('#kiri').click(function() {
        // animate({properti css}, durasi, callback)
        $('.box').animate({
            left: 300
        }, 3000);
    });
    $('#kanan').click(function() {
        // animate({properti css}, durasi, callback)
        $('.box').animate({
            bottom: 200
        }, 2000, function() {
            $('.box').animate({
                left: 300
            }, 2000);
        });
    });


    // clearQueue()
    $('#start').click(function() {
        $('.box2').animate({
            width: 200
        }, 4000, function() {
            $('.box2').animate({
                height: 100
            }, 2000);
        });
    });
    $('#clearqueue').click(function() {
        // $('.box2').clearQueue();
        $('.box2').stop();
    });


    // delay(waktu)
    $('#run').click(function() {
        $('.delay1').animate({
            height: 150
        }, 2000).slideUp(3000).fadeIn(2000);

        // pakai delay
        $('.delay2').animate({
            height: 150
        }, 2000).delay(4000).slideUp(3000).fadeIn(2000);
    });


});