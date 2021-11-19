/*jshint sub:true*/
/* jshint esversion: 6 */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loading");
const game = document.getElementById("game");
const startBtn = docutment.getElementById("start-btn");
const homeView = document.getElementById("home")
const endGame = docutment.getElementById("endGame")

//CONSTANTS
const CORRECT_POINTS = 100; //POINTS AWARDED FOR EACH CORRECT ANSWER
const MAX_QUESTIONS = 4; //MAX AMOUNT QUESTION PER QUIZ SECTION

const questionM = [{
        question: "What does “www” stand for in a website browser?",
        choice1: "Wild Wild West",
        choice2: "World Wide Web",
        choice3: "What Went Wrong",
        choice4: "Wide World Web",
        answer: 2
    },
    {
        question: "How long is an Olympic swimming pool (in meters)?",
        choice1: "150 meters",
        choice2: "25 meters",
        choice3: "100 meters",
        choice4: "50 meters",
        answer: 4
    },
    {
        question: "What countries made up the original Axis powers in World War II?",
        choice1: "Japan, US, UK",
        choice2: "Germany, France and Belgium",
        choice3: "Germany, Italy, and Japan",
        choice4: "Russia, Italy and Japan",
        answer: 3
    },
    {
        question: "What geometric shape is generally used for stop signs?",
        choice1: "Octagon",
        choice2: "Circle",
        choice3: "Hexagon",
        choice4: "Oval",
        answer: 1
    }
];

let currentQuestion = {};
let answerAccepted = false;
let score = 0;
let questionCounter = 0;
let allQuestions = [];

//START OF GAME
function startGame() {
    questionCounter = 0;
    score = 0;
    allQuestions = [...questionM];
    getAQuestion();
};

//GRABS NEW AND RANDOM QUESTION FOR GAME & CHECKS IF ANY QUESTIONS ARE LEFT IF NOT THEN ENDS THE GAME
function getAQuestion() {
    if (allQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('currentQuestion', score)
            //goes to end of the game
        game.classList.add('hidden')
        endGame.classList.remove('hidden')
    } else {
        questionCounter++;
        const questionIndex = Math.floor(Math.random() * allQuestions.length); //PULLS RANDOM QUESTIONS FROM AVAILABLE QUESTION ARRAY
        currentQuestion = allQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        //Grabs choices for the questions
        choices.forEach(choice => {
            let number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number]; //uses choices and gets the correct choice out of the question
        });

        allQuestions.splice(questionIndex, 1); //Leaves out question that have been just used 

        answerAccepted = true;
    };
};

// Goes through each choices
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!answerAccepted) return;

        answerAccepted = false;
        const questionAnswer = currentQuestion.answer;
        const answerSelected = parsInt(choiceSelected.dataset['number']);

        if (answerSelected === questionAnswer) {
            console.log('win')
            incrementScore();
        } else {
            console.log('lose')
        }

        progressText.innerText = `Question Number ${questionCounter} of ${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
        getAQuestion();
    }, 400);

});

incrementScore = () => {
    score++
    scoreText.innerText = score;
    console.log(score)
};
startGame();
startBtn.addEventListener("click", () => {
    homeView.classList.add('hidden')
    game.classList.remove('hidden')
})