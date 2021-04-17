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