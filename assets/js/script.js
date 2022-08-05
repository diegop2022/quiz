var time = 60;
var timeInterval;
var button = document.querySelector("#start");
var question = document.getElementById("question")
var option1 = document.getElementById("option-1")
var option2 = document.getElementById("option-2")
var option3 = document.getElementById("option-3")
var option4 = document.getElementById("option-4")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var user = document.getElementById("user-name")
var submit = document.getElementById("submit")
var userArr = []

function startTimer() {
    timeInterval = setInterval(function() {
        if (time > 1) {
            timer.textContent = time;
            time--;
        } 

}, 1000);
};

function startGame() {
    
    btn1.addEventListener("click", function(event) {
        if(question.textContent === "How many days are in a week?"){
            event.preventDefault()
            console.log(event)
            option1.textContent = "false"
            time = time - 10;
        } else if (question.textContent === "What is the 7th letter in the alphabet"){
            event.preventDefault()
            option1.textContent = "true"
            question3();
        } else if (question.textContent === "How many months are in a year?"){
            event.preventDefault()
            console.log(event)
            option1.textContent = "false"
            time = time - 10     
        }
    });

    btn2.addEventListener("click", function(event) {
        if(question.textContent === "How many days are in a week?"){
            event.preventDefault()
            console.log(event)
            option2.textContent = "false"
            time = time - 10;
        } else if (question.textContent === "What is the 7th letter in the alphabet"){
            event.preventDefault()
            option2.textContent = "false"
            time = time - 10;
        } else if (question.textContent === "How many months are in a year?"){
            event.preventDefault()
            console.log(event)
            option2.textContent = "false"
            time = time - 10     
        }
    });

    btn3.addEventListener("click", function(event) {
        if(question.textContent === "How many days are in a week?"){
            event.preventDefault()
            console.log(event)
            option3.textContent = "false"
            time = time - 10;
        } else if (question.textContent === "What is the 7th letter in the alphabet"){
            event.preventDefault()
            option3.textContent = "false"
            time = time - 10;
        } else if (question.textContent === "How many months are in a year?"){
            event.preventDefault()
            console.log(event)
            option3.textContent = "false"
            time = time - 10     
        }
    });

    btn4.addEventListener("click", function(event) {
        if(question.textContent === "How many days are in a week?"){
            event.preventDefault()
            console.log(event)
            option4.textContent = "true"
            question2();
        } else if (question.textContent === "What is the 7th letter in the alphabet"){
            event.preventDefault()
            option4.textContent = "false"
            time = time - 10;
        } else if (question.textContent === "How many months are in a year?"){
            event.preventDefault()
            option4.textContent = "true"
            endQuiz()   
        }
    });
    
    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    btn4.style.visibility = "visible";
    question1()
    
    function question1() {
    question.textContent = "How many days are in a week?"
    option1.textContent = "3" 
    option2.textContent = "8"
    option3.textContent = "6"
    option4.textContent = "7"
    };
    }

    function question2() {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        question.textContent = "What is the 7th letter in the alphabet"
        option1.textContent = "g" 
        option2.textContent = "t"
        option3.textContent = "j"
        option4.textContent = "q"
    }
    
    function question3() {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        question.textContent = "How many months are in a year?"
        option1.textContent = "10" 
        option2.textContent = "8"
        option3.textContent = "11"
        option4.textContent = "12"
    }

    function endQuiz() {
        question.textContent = "Your score is " + time
        option1.textContent = ""  
        option2.textContent = ""
        option3.textContent = ""
        option4.textContent = ""

        submit.style.visibility = "visible";
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
        btn4.style.visibility = "hidden";
        highscore.style.visibility = "visible"
        stopTimer()

        function stopTimer() {
            clearInterval(timeInterval)
        }

        submit.addEventListener("click", function() {
            board()
        })
    }

    function board() {
        question.textContent = "High Scores"
        option1.textContent = "" 
        option2.textContent = ""
        option3.textContent  = ""
        option4.textContent = ""

        submit.style.visibility = "hidden";
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
        btn4.style.visibility = "hidden";
        highscore.style.visibility = "hidden"


    }



button.addEventListener("click", function() {
    startTimer()
    startGame()
});


