/*jshint sub:true*/
/* jshint esversion: 6 */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loading");
const game = document.getElementById("game");


let currentQuestion = {};
let acceptAnswer = false;
let score = 0;
let questionCounter = 0;
let allQuestions = [];

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
]

//CONSTANTS
const CORRECT_POINTS = 10; //POINTS AWARDED FOR EACH CORRECT ANSWER
const MAX_QUESTIONS = 4; //MAX AMOUNT QUESTION PER QUIZ SECTION

//START OF GAME
startGame = () => {
    questionCounter = 0;
    score = 0;
    allQuestions = [...questionM];
    console.log(allQuestions);
    getAQuestion();
    quiz.classList.remove("hidden"); //Classlist set to remove hidden parts on loading
};

//GRABS NEW AND RANDOM QUESTION FOR GAME & CHECKS IF ANY QUESTIONS ARE LEFT IF NOT THEN ENDS THE GAME
getAQuestion = () => {
    if (allQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        //goes to end of the game
        return window.location.assign('/end.html');
    }
    questionCounter++;
    let questionIndex = Math.floor(Math.random() * allQuestions.length); //PULLS RANDOM QUESTIONS FROM AVAILABLE QUESTION ARRAY
    currentQuestion = allQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //Grabs choices for the questions
    choices.forEach(choice => {
        let number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]; //uses choices and gets the correct choice out of the question
    });

    allQuestions.splice(questionIndex, 1); //Leaves out question that have been just used 
    console.log(allQuestions);
    acceptAnswer = true;

    progressText.innerText = `Question Number ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) *100}%`;


};

// Goes through each choices
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptAnswer) return;


        acceptAnswer = false;
        const choiceSelected = e.target;
        const answerSelected = choiceSelected.dataset['number'];
        console.log(answerSelected);


        let classToApply = answerSelected == currentQuestion.answer ? 'right' : 'wrong';

        if (classToApply === 'right') {
            incrementScore(CORRECT_POINTS);
        }

        choiceSelected.parentElement.classList.add(classToApply);

        setTimeout(() => {
            choiceSelected.parentElement.classList.remove(classToApply);
            getAQuestion();
        });

    });


});

startGame();