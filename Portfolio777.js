$( function() {
    $( "#tabs" ).tabs({
        collapsible: false
    });
} );


//
// $(".about").click(function () {
//     $("#tabs-1 .tab").hide();
//     $("#tabs-2 .tab").hide();
//     $("#tabs-3 .tab").hide();
//     $("#abt .tab").show();
// });
//
// $(".pro1").click(function () {
//     $("#abt .tab").hide();
//     $("#tabs-2 .tab").hide();
//     $("#tabs-3 .tab").hide();
//     $("#tabs-1 .tab").show();
// });
//
// $(".pro2").click(function () {
//     $("#abt .tab").hide();
//     $("#tabs-1 .tab").hide();
//     $("#tabs-3 .tab").hide();
//     $("#tabs-2 .tab").show();
// });
//
// $(".pro24").click(function () {
//     $("#abt .tab").hide();
//     $("#tabs-1 .tab").hide();
//     $("#tabs-2 .tab").hide();
//     $("#tabs-3 .tab").show();
// });


$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("about");
        $(this).parent().siblings().removeClass("about");
        var projects = $(this).attr("href");
        $(".tab").not(projects).css("display", "none");
        $(projects).fadeIn();
    });
});