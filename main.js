function toggle(){
    var newsletter = document.querySelector('.newsletter');
    newsletter.classList.toggle('active');
}




var countDate = new Date('Jun 16, 2020 00:00:00').getTime();
function newYear() {
    var now = new Date().getTime();
    var gap = countDate - now;

    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (min));
    var s = Math.floor((gap % (min)) / sec);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function () {
    newYear();

}, 1000);