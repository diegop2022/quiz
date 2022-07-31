var counter = 60


function setup() {
    var timer = document.getElementById('#timer');
    timer.html(counter);

    function timeIt() {
        counter--;
        timer.html(counter);
    }

    setInterval(timeIt, 1000);
}

