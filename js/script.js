let callback = function () {
    $('.item-skills').each(function () {
        let newWidth = $(this).parent().width() * $(this).data("percent");
        $(this).width(0);
        $(this).animate({
            width: newWidth,
        }, 1000);
    });
};
$(document).ready(callback);

let resize;
$(window).resize(function () {
    clearTimeout(resize);
    resize = setTimeout(function(){
        callback();
    }, 100);
});