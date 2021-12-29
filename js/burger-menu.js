$(function () {
    $("body").on("click", ".burger-menu", function () {
        $(".burger-menu, .burger-menu__lines").toggleClass("open");
    });

    $("body").on("click", ".header__nav a", function () {
        $(".burger-menu, .burger-menu__lines").removeClass("open");
    });
});