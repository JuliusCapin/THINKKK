const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Multi Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "JQuery",
            "CSS",
            "XML"
        ],
        correct: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: [
            "React",
            "Angular",
            "Django",
            "Vue"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionElement.textContent = current.question;

    optionButtons.forEach((button, index) => {
        button.textContent = current.options[index];
    });

    resultElement.textContent = "";
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = "Wrong!";
        resultElement.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz Finished!";
        document.querySelector(".options").style.display = "none";
        resultElement.textContent = "Your score: " + score + "/" + quizData.length;
        nextBtn.style.display = "none";
    }
}

loadQuestion();