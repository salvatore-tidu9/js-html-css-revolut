$(document).ready(function () {

    $(".menu_item").mouseenter(function() {

        $(this).find(".dropdown_menu").show();
    })

    $(".menu_item").mouseleave(function() {

        $(".dropdown_menu").hide();
    })

});