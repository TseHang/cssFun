var x = 0 ;
$('.content').click(function(e){
    x++ ;

    $('.container').css({
        transform:'rotateY('+x*(-60)+'deg)',
    });
});
