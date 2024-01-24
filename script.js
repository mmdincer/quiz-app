
function Question(questionText, answers, correct) {
    this.questionText = questionText;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.answerCheck = function(answer) {
    return answer === this.correct;
}

let questions = [
    new Question("1. Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Npm", c: "Npx", d: "Ngrx"}, "b"),
    new Question("2. Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Npm", c: "Npx", d: "Ngrx"}, "b"),
    new Question("3. Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Npm", c: "Npx", d: "Ngrx"}, "b"),
    new Question("4. Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Npm", c: "Npx", d: "Ngrx"}, "b"),
    new Question("5. Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Npm", c: "Npx", d: "Ngrx"}, "b"),
];

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);

document.querySelector(".btn_start").addEventListener("click", function() {
    document.querySelector(".quiz_box").classList.add("active");
    showQuestion(quiz.getQuestion());
})

document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
    } else {
        alert("quiz bitti");
    }
});

function showQuestion(question) {
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

    document.querySelector(".question_text").innerHTML = questionText;
    document.querySelector(".option_list").innerHTML = questionAnswers;
}


