function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn-replay"),
    this.btn_quit = document.querySelector(".btn-quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.question_text = document.querySelector(".question_text"),
    this.option_list = document.querySelector(".option_list"),
    this.question_index = document.querySelector(".question_index"),
    this.score_text = document.querySelector(".score_text"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second")
}

UI.prototype.showQuestion = function(question) {
    let questionText = '<span>' + question.questionText + '</span>';
    let questionAnswers = '';
    
    for (let answer in question.answers) {
        questionAnswers +=
            `
                <div class="option"> 
                    <span><b>${answer}</b>: ${question.answers[answer]}</span>
                </div>
            `;
    }

    this.question_text.innerHTML = questionText;
    this.option_list.innerHTML = questionAnswers;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option)
    {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.showQuestionNumber = function(questionOrder, totalQuestion) {
    let tag = `<span class="badge bg-warning">${questionOrder} / ${totalQuestion}</span>`;
    ui.question_index.innerHTML = tag;
}

UI.prototype.showScore = function(totalQuestion, score) {
    let tag = `<span> Number of correct answers: ${score} / ${totalQuestion} </span>`;
    ui.score_text.innerHTML = tag;
}