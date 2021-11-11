const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loading");

let currentQuestion = {};
let acceptAnwser = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];



let questionM = [{
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

//CONSTANTS
const CORRECT_POINTS = 10; //POINTS AWARDED FOR EACH CORRECT ANSWER
const MAX_QUESTIONS = 4; //MAX AMOUNT QUESTION PER QUIZ SECTION

//START OF GAME
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questionM]; //SPREAD OPERATOR FOR THE ARRAY OF QUESTIONS
    console.log(availableQuestion);
    getAQuestion();
    // game.classlist.remove("hidden"); //Classlist set to remove hidden parts on loading
};

//GRABS NEW AND RANDOM QUESTION FOR GAME & CHECKS IF ANY QUESTIONS ARE LEFT 
getAQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length); //PULLS RANDOM QUESTIONS FROM AVAILABLE QUESTION ARRAY
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    //Grabs choices for the questions
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]; //uses choices and gets he correct choice out of the question
    });

    availableQuestion.splice(questionIndex, 1); //Leaves out question that have been just used 

    acceptAnwser = true;
    if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/index.html");
    }
};



// Goes through each choice and 
choices.forEach(choice => {

    choice.addEventListener("click", e => {
        if (!acceptAnwser) returns;

        acceptAnwser = false;
        const selectedChoice = e.target;
        const selectAnweser = selectedChoice.dataset['number'];
        console.log(selectAnweser);
        getAQuestion();
    });

});

startGame();