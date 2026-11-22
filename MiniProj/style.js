
// Quiz Questions
const questions = [
    {
        question: "1. What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
            { text: "Home Text Markup Language", correct: false }
        ]
    },

    {
        question: "2. Which language is used for styling websites?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false }
        ]
    },

    {
        question: "3. Which language makes a website interactive?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },

    {
        question: "4. Which tag is used to create a paragraph?",
        answers: [
            { text: "<h1>", correct: false },
            { text: "<p>", correct: true },
            { text: "<br>", correct: false },
            { text: "<div>", correct: false }
        ]
    },

    {
        question: "5. Which symbol is used for an ID selector in CSS?",
        answers: [
            { text: ".", correct: false },
            { text: "#", correct: true },
            { text: "*", correct: false },
            { text: "@", correct: false }
        ]
    },

    {
        question: "6. Which method selects an element by ID in JavaScript?",
        answers: [
            { text: "getElementById()", correct: true },
            { text: "getElementByClass()", correct: false },
            { text: "selectById()", correct: false },
            { text: "findElement()", correct: false }
        ]
    },

    {
        question: "7. Which HTML tag is used to insert an image?",
        answers: [
            { text: "<image>", correct: false },
            { text: "<pic>", correct: false },
            { text: "<img>", correct: true },
            { text: "<src>", correct: false }
        ]
    },

    {
        question: "8. Which keyword declares a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of these", correct: true }
        ]
    },

    {
        question: "9. Which CSS property changes text color?",
        answers: [
            { text: "background", correct: false },
            { text: "font-size", correct: false },
            { text: "color", correct: true },
            { text: "text-style", correct: false }
        ]
    },

    {
        question: "10. Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    }
];

// Get HTML Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");

// Variables
let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;

    quizBox.classList.remove("hide");
    resultBox.classList.add("hide");

    nextButton.innerText = "Next Question";

    showQuestion();
}

// Show Question
function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer.text;
        button.classList.add("btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);

    });
}

// Reset Previous Question
function resetState() {

    nextButton.style.display = "none";

    while (answerButtons.firstChild) {

        answerButtons.removeChild(answerButtons.firstChild);

    }
}

// Check Answer
function selectAnswer(e) {

    const selectedButton = e.target;

    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("incorrect");

    }

    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {

            button.classList.add("correct");

        }

        button.disabled = true;

    });

    nextButton.style.display = "block";

}

// Next Question
nextButton.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});

// Show Final Result
function showResult() {

    quizBox.classList.add("hide");

    resultBox.classList.remove("hide");

    scoreElement.innerText =
        "Your Score: " + score + "/" + questions.length;

}

// Restart Quiz
function restartQuiz() {

    startQuiz();

}

// Start the Quiz
startQuiz();
