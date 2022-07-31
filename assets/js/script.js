var time = 60;
var timeInterval;
var button = document.querySelector("#start");
var question = document.getElementById("#question")
var option1 = document.getElementById("#option-1")
var option2 = document.getElementById("#option-2")
var option3 = document.getElementById("#option-3")
var option4 = document.getElementById("#option-4")

function startTimer() {
    timeInterval = setInterval(function() {
        if (time > 1) {
            timer.textContent = time;
            time--;
        } 

}, 1000);
}

function questionChange() {
    question.textContent = "Question 1"
}

function optionChange() {
    option1.textContent = "Option 1"
    option2.textContent = "Option 2"
    option3.textContent = "Option 3"
    option4.textContent = "Option 4"
}



button.addEventListener("click", function() {
    startTimer()
    questionChange()
});

