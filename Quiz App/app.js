const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text:"Shark" , correct: false},
            {text:"Blue Whale" , correct: true},
            {text:"Human" , correct: false},
            {text:"Elephant" , correct: false}
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text:"Shark" , correct: false},
            {text:"Human" , correct: false},
            {text:"Blue Whale" , correct: true},
            {text:"Elephant" , correct: false}
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text:"Shark" , correct: false},
            {text:"Human" , correct: false},
            {text:"Elephant" , correct: false},
            {text:"Blue Whale" , correct: true}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let quesNo = currentQuestionIndex+1;
    questionElement.innerHTML = quesNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct)
        {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e)
{
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct === "true";
    if(iscorrect)
    {
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct == "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextQues()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextQues();
    }else{
        startQuiz();
    }
});

startQuiz();

