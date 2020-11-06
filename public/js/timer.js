// requires easy timer

var timer = new easytimer.Timer();
$('#startTimer').click(function () {
    timer.start();
});

$('#stopTimer').click(function () {
    timer.pause();
});

$('#chronoExample .stopButton').click(function () {
    timer.stop();
});

$('#chronoExample .resetButton').click(function () {
    timer.reset();
});

timer.addEventListener('secondsUpdated', function (e) {
    $('#current-time').html(timer.getTimeValues().toString());
});

timer.addEventListener('started', function (e) {
    $('#current-time').html(timer.getTimeValues().toString());
});

timer.addEventListener('reset', function (e) {
    $('#current-time').html(timer.getTimeValues().toString());
});

