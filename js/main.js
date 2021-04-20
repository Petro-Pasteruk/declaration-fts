$(function() {
    var target = new Date(2021, 04, 21);
    var timer = setInterval(function(){
        var now = Date.now();
        var delta = Math.abs(target - now) / 1000;
        var days = Math.floor(delta / 86400);
        $("#counter-days .counter").html(days);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        $("#counter-hours .counter").html(hours);
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        $("#counter-minutes .counter").html(minutes);
        delta -= minutes * 60;
        var seconds = Math.floor(delta % 60);
        $("#counter-seconds .counter").html(seconds);
    }, 1000);
});

window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth <= 860 && !document.querySelector(".timer").classList.contains("col-sm-8")) {
        document.querySelector(".col-sm-5.timer").classList.remove("col-sm-5");
        document.querySelector(".timer").classList.add("col-sm-8");

        document.querySelectorAll(".forms > .col-sm-5").forEach(item => {
            item.classList.remove("col-sm-5");
            item.classList.add("col-sm-12");
        });
    }
    if (document.documentElement.clientWidth <= 910 && !document.querySelector(".adaptive901").classList.contains("col-sm-9")) {
        document.querySelector(".adaptive901").classList.remove("col-sm-5");
        document.querySelector(".adaptive901").classList.add("col-sm-9");
    }
});

if (document.documentElement.clientWidth <= 860 && !document.querySelector(".timer").classList.contains("col-sm-8")) {
    document.querySelector(".col-sm-5.timer").classList.remove("col-sm-5");
    document.querySelector(".timer").classList.add("col-sm-8");

    document.querySelectorAll(".forms > .col-sm-5").forEach(item => {
        item.classList.remove("col-sm-5");
        item.classList.add("col-sm-12");
    });
}
if (document.documentElement.clientWidth <= 910 && !document.querySelector(".adaptive901").classList.contains("col-sm-9")) {
    document.querySelector(".adaptive901").classList.remove("col-sm-5");
    document.querySelector(".adaptive901").classList.add("col-sm-9");
}