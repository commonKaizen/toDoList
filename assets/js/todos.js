$("li").on("click", function () {
    $(this).toggleClass("complete");
});

$("span").on("click", function () {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});