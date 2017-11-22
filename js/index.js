$(function(){
    var box= $(".Car-fi");
    var ul= $(".Car-fi-c");
    var lis=ul.children();
    var flag=true;
    var timer=setInterval(toPlay,3000);
    function toPlay(){
        lis=ul.children();
        ul.animate({
            left:-1349
        },800,function(){
            $(this).append(lis.first());
            $(this).css('left',0);
            $(".toRight").flag = true;
        })
    };
    box.hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(toPlay,3000)
    });
    $(".toLeft").click(function(){
        toPlay();
    	$(window).clearTimeout(timer);
    });
    $(".toRight").click(function(){
        lis=ul.children();
        ul.prepend(lis.last());
        ul.css("left",-1349);
        ul.animate({
            left:0
        },800,function(){
            $(this).css("left",0);
        })
    	$(window).clearTimeout(timer);
    });
    var wwW = $(window).width();
    $(".header").css("width",wwW);
    $("#main").css("width",wwW);
    $(".footer").css("width",wwW);
});

