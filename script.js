const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(15);
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
})

ui.next_btn.addEventListener("click", function() {
    clearInterval(counter);
    startTimer(15);
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        ui.next_btn.classList.remove("show");
        ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestion());
    } else {    
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showScore(quiz.questions.length, quiz.score);
    }
});

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    if(quiz.getQuestion().answerCheck(answer)) {
        quiz.score += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
        ui.next_btn.classList.add("show");
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
        ui.next_btn.classList.add("show");
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
}

ui.btn_replay.addEventListener("click", function() {
    clearInterval(counter);
    quiz.score = 0;
    quiz.questionIndex = 0;
    ui.score_box.classList.remove("active");
    ui.btn_start.click();
});

ui.btn_quit.addEventListener("click", function() {
    clearInterval(counter);
    window.location.reload();
})

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if(time == -1) {
            clearInterval(counter);
            for(let i=0; i < ui.option_list.children.length; i++) {
                ui.option_list.children[i].classList.add("disabled");
            }
            ui.next_btn.classList.add("show");
        }


        if(time < 0) {
            clearInterval(counter);
        }
    }
}