
$(document).ready(function () {

    // Animasi hide dan show menggunakan jQuery
    $("#profileButton").click(function () {

        $("#profil .profile-text").fadeToggle(800);

    });

    // Animasi fade saat halaman dibuka
    $(".cv-container").hide().fadeIn(1200);

    // Efek hover pada bagian CV
    $(".cv-section h4").hover(
        function () {
            $(this).css("color", "#a35e80");
        },
        function () {
            $(this).css("color", "#713b59");
        }
    );

});