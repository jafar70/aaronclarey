// JavaScript File
$( document ).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
        
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){
    
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;
    
    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        

    });
}

$(document).ready(function () {
    $(".content2").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content2").is(':visible') ? 'Ghost Writing +' : 'Ghost Writing -';
        $(".show_hide").text(txt);
        $(this).next('.content2').slideToggle(200);
    });
    
    $(".content3").hide();
    $(".show_hide2").on("click", function () {
        var txt = $(".content3").is(':visible') ? 'Courting/Dating +' : 'Courting/Dating -';
        $(".show_hide2").text(txt);
        $(this).next('.content3').slideToggle(200);
    });
    
    $(".content4").hide();
    $(".show_hide3").on("click", function () {
        var txt = $(".content4").is(':visible') ? 'Education +' : 'Education -';
        $(".show_hide3").text(txt);
        $(this).next('.content4').slideToggle(200);
    });
    
    $(".content5").hide();
    $(".show_hide4").on("click", function () {
        var txt = $(".content5").is(':visible') ? 'Finance/Economics +' : 'Finance/Economics -';
        $(".show_hide4").text(txt);
        $(this).next('.content5').slideToggle(200);
    });
    
    $(".content6").hide();
    $(".show_hide5").on("click", function () {
        var txt = $(".content6").is(':visible') ? 'Business Consulting +' : 'Business Consulting -';
        $(".show_hide5").text(txt);
        $(this).next('.content6').slideToggle(200);
    });
    
    $(".content7").hide();
    $(".show_hide6").on("click", function () {
        var txt = $(".content7").is(':visible') ? 'Career +' : 'Career -';
        $(".show_hide6").text(txt);
        $(this).next('.content7').slideToggle(200);
    });
});