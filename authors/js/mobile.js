$(document).ready(function () {
    $(".1st-title").click(function () {
        $(".pimpinan").toggle();
    });
    $(".2nd-title").click(function () {
        $(".tohide2").toggleClass("toshow2");
    });
    $(".3rd-title").click(function () {
        $(".tohide3").toggleClass("toshow3");
    });
    $(".4th-title").click(function () {
        $(".tohide4").toggleClass("toshow4");
    });
    $(".5th-title").click(function () {
        $(".tohide5").toggleClass("toshow5");
    });
    $(".6th-title").click(function () {
        $(".tohide6").toggleClass("toshow6");
    });
    $(".7th-title").click(function () {
        $(".tohide7").toggleClass("toshow7");
    });
    $(".8th-title").click(function () {
        $(".tohide8").toggleClass("toshow8");
    });
    $(".9th-title").click(function () {
        $(".tohide9").toggleClass("toshow9");
    });
    $(".10th-title").click(function () {
        $(".tohide10").toggleClass("toshow10");
    });
    $(".rotate1, .1st-title div").click(function () {
        $(".rotate1").toggleClass("rotate-image");
    });
    $(".rotate2, .2nd-title div").click(function () {
        $(".rotate2").toggleClass("rotate-image");
    });
    $(".rotate3, .3rd-title div").click(function () {
        $(".rotate3").toggleClass("rotate-image");
    });
    $(".rotate4, .4th-title div").click(function () {
        $(".rotate4").toggleClass("rotate-image");
    });
    $(".rotate5, .5th-title div" ).click(function () {
        $(".rotate5").toggleClass("rotate-image");
    });
    $(".rotate6, .6th-title div").click(function () {
        $(".rotate6").toggleClass("rotate-image");
    });
    $(".rotate7, .7th-title div").click(function () {
        $(".rotate7").toggleClass("rotate-image");
    });
    $(".rotate8, .8th-title div").click(function () {
        $(".rotate8").toggleClass("rotate-image");
    });
    $(".rotate9, .9th-title div").click(function () {
        $(".rotate9").toggleClass("rotate-image");
    });
    $(".rotate10, .10th-title div").click(function () {
        $(".rotate10").toggleClass("rotate-image");
    });
});

function openTabNewsAuthor(evt, tabNewsAuthor) {
    var i, tabcontentAuthor, tablinksAuthor;
    tabcontentAuthor = document.getElementsByClassName("tabcontent-author-news");
    for (i = 0; i < tabcontentAuthor.length; i++) {
        tabcontentAuthor[i].style.display = "none";

    }
    tablinksAuthor = document.getElementsByClassName("tablinks-author-news");
    for (i = 0; i < tablinksAuthor.length; i++) {
        tablinksAuthor[i].className = tablinksAuthor[i].className.replace(" active-author-news", "");
    }

    document.getElementById(tabNewsAuthor).style.display = "block";
    evt.currentTarget.className += " active-author-news";
}

function functionTabNewsAuthor(e) {
    var elems = document.querySelectorAll(".active-author-news");
    [].forEach.call(elems, function (el) {
        el.classList.remove("active-author-news");
    });
    e.target.className = "active-author-news";
}

$("#scrol-berita-terkini").click(function() {
    $('html, body').animate({
        scrollTop: $("#title-author-mob").offset().top-180
    });
});

$("#scrolsticky-berita-terkini").click(function() {
    $('html, body').animate({
        scrollTop: $("#title-author-mob").offset().top-120
    });
});
