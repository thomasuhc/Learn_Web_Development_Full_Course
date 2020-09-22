
$("h1").addClass("big-title margin-50");

$("a").attr("href","https://www.bing.com")

$("h1").click(function() {

    $("h1").css("color", "purple");

});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    $("h1").text(event.key)
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});


$("button").on("click",function() {
    $("h1").hide();
});

$("button").on("click",function() {
    $("h1").toggle();
});

$("button").on("click",function() {
    $("h1").fadeOut();
});

$("button").on("click",function() {
    $("h1").fadeToggle();
});

$("button").on("click",function() {
    $("h1").slideUp();
});

$("button").on("click",function() {
    $("h1").slideToggle();
});

$("button").on("click",function() {
    $("h1").animate({opacity: 8.5});
});

$("button").on("click",function() {
    $("h1").animate({margin: "20%"});
});


$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});