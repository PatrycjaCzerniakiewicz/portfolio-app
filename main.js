const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});


// SIDE-BAR

const backgrounds = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg"
];

$(".side-bar > a").siblings().hide();

$(".side-bar > a").click(function() {
    $(this).siblings().toggle();
    $(this).toggleClass("open-bar");

    $(".back1").css("background-image", "url(" + backgrounds[0] + ")");
    $(".back2").css("background-image", "url(" + backgrounds[1] + ")");
    $(".back3").css("background-image", "url(" + backgrounds[2] + ")");
    $(".back4").css("background-image", "url(" + backgrounds[3] + ")");

    if ($(this).hasClass("open-bar")) {

        $(".side-bar").animate({
            width: "30%"
        }, 1000, function() {
            $(".side-bar > a").text("Zamknij");
        });

    } else {

        $(".side-bar").animate({

            width: "12%"
        }, 1000, function() {
            $(".side-bar > a").text("Otwórz");
        });
    }
})

$(".newBackground > div").click(function() {

    $(this).toggleClass("addBorder");

    $(this).siblings().removeClass("addBorder");
})


$("#updateButton").click(function() {
    const newIntroText = $("#newText").val();
    const newIntroTextColor = $("#newTextColor").val();

    $(".name-headline").text(newIntroText);
    $(".name-headline").css("color", newIntroTextColor);

    if ($(".back1").hasClass("addBorder")) {
        $("#home").css("background-image", "url(" + backgrounds[0] + ")");
    } else if ($(".back2").hasClass("addBorder")) {
        $("#home").css("background-image", "url(" + backgrounds[1] + ")");
        $("#home").css("background-position-y", "0");
    } else if ($(".back3").hasClass("addBorder")) {
        $("#home").css("background-image", "url(" + backgrounds[2] + ")");
        $("#home").css("background-position-y", "0");
    } else {
        $("#home").css("background-image", "url(" + backgrounds[3] + ")");
        $("#home").css("background-position-y", "0");
    }

});