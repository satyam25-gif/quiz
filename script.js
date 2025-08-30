const questions = [
    {
        question: "1. What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
     {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
     {
        question: "3. Where is the Mt Everest is located?",
        options: ["Nepal", "Pakistan", "China", "India"],
        answer: "Nepal"
    },
  {
        question: "4. What is the largest Ocean?",
        options: ["Arctic", "Pacific", "Indian","atlantic"],
        answer: "Pacific"
    },
  {
        question: "5. Which gas do plants absorb?",
        options: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
        answer: "Carbon Dioxide"
    },
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultsEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        optionsEl.appendChild(btn);
    });
    nextBtn.style.display = "none";
}

function selectAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correct) {
            btn.style.backgroundColor = "lightgreen";
        } else if (btn.textContent === selected) {
            btn.style.backgroundColor = "lightcoral";
        }
    });
    if (selected === correct) {
        score++;
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizEl.classList.add("hidden");
    resultsEl.classList.remove("hidden");
    scoreEl.textContent = score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizEl.classList.remove("hidden");
    resultsEl.classList.add("hidden");
    loadQuestion();
}

loadQuestion();
