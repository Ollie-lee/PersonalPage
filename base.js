$(document).ready(function () {
    $(function () {
        $(".nav-link").click(function () {
            if ($(this).hasClass("current")) {
                return;
            }

            let $parent = $(this).parent().parent();
            let $swapContainer = $(".swapContainer");
            $('.current', $parent).removeClass('current');
            $('.current', $swapContainer).removeClass('current');
            $(this).addClass('current');
            $('.page', $swapContainer).eq($(this).parent().index()).addClass('current');
            console.log($(this).parent().index())
        })
    })




});