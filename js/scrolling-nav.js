//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(document).scroll(function(){
    if($(this).scrollTop() > 50)
    {   
       $('.navbar-default .navbar-nav > li > a').css({"color":"#777"});
    } else {
       $('.navbar-default .navbar-nav > li > a').css({"color":"#fff"});
    }
});

$(document).scroll(function(){
    if($(this).scrollTop() > 50)
    {   
       $('.navbar-default .navbar-brand').css({"color":"#777"});
    } else {
       $('.navbar-default .navbar-brand').css({"color":"#fff"});
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top 
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
