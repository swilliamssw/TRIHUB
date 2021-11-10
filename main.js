const question = document.getElementById("question");
const choices = Array.from(document.querySelector(".choice-text"));
const progressText = (document.querySelector("#progressText"));
const scoreText = (document.querySelector("#score"));
const progressBarFull = (document.querySelector("#progressBarFull"));

let currentQuestion = {};
let acceptingAnwser = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let question = [{
        question: "what is the correct term?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        anwser: 2
    },
    {
        question: "how does this work?",
        choice1: "<scriptfdngnfdgn>",
        choice2: "<javascriptndngdfhn>",
        choice3: "<jsdfbgndfnf>",
        choice4: "<scriptingfgddfg>",
        anwser: 4
    },
    {
        question: "do you need help?",
        choice1: "<scriptngfdnbdgf>",
        choice2: "<javascripffdgnfdt>",
        choice3: "<jsfgnfgdn>",
        choice4: "<scriptinngfdngdg>",
        anwser: 3
    },
    {
        question: "what is your name?",
        choice1: "<scripfgndfgndt>",
        choice2: "<javascrfngfdnbgipt>",
        choice3: "<jsgfgnfd>",
        choice4: "<scriptifdngfdnng>",
        anwser: 1
    }
];

// CONSTANTS
const CORRECT_POINTS = 10; //POINTS AWARDED FOR EACH CORRECT ANSWER
const MAX_QUESTIONS = 10; // MAX AMOUNT QUESTION PER QUIZ SECTION

// ARROW FUNCTION FOR START OF GAME
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...question]; // SPREAD OPERATOR FOR THE ARRAY OF QUESTIONS
    getNewQuestion();
    // game.classlist.remove("hidden"); // Classlist set to remove hidden parts on loading
};

// GRABS NEW AND RANDOM QUESTION FOR GAME 
getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //PULLS RANDOM QUESTIONS FROM AVAILABLE QUESTION ARRAY
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

};

startGame();