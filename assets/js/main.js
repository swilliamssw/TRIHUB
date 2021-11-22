/*jshint sub:true*/
/* jshint esversion: 6 */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loading");
const game = document.getElementById("game");
const startBtn = document.getElementById("start-btn");
const homeView = document.getElementById("home");
const endGame = document.getElementById("endGame");


//CONSTANTS
const CORRECT_POINTS = 100; //POINTS AWARDED FOR EACH CORRECT ANSWER
const MAX_QUESTIONS = 10; //MAX AMOUNT QUESTION PER QUIZ SECTION

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
    },
    {
        question: "How many languages are written from right to left?",
        choice1: "12",
        choice2: "15",
        choice3: "20",
        choice4: "6",
        answer: 1
    },
    {
        question: "What is the name of the biggest technology company in South Korea?",
        choice1: "Apple",
        choice2: "LG",
        choice3: "Samsung",
        choice4: "Hitachi",
        answer: 3
    },
    {
        question: "Which animal can be seen on the Porsche logo?",
        choice1: "Horse",
        choice2: "Donkey",
        choice3: "Owl",
        choice4: "Phoenix",
        answer: 1
    },
    {
        question: "In which continent are Chile, Argentina and Brazil?",
        choice1: "North America",
        choice2: "South America",
        choice3: "Europe",
        choice4: "Australasia",
        answer: 2
    },
    {
        question: "Which brand of soup featured in one of Andy Warhol’s most famous pop art pieces?",
        choice1: "Heinz",
        choice2: "Campbell's",
        choice3: "Baxters",
        choice4: "Knorr",
        answer: 2
    },
    {
        question: "The Mad Hatter and the Cheshire Cat are characters in which famous book?",
        choice1: "Winne-the-Pooh",
        choice2: "Charlotte's Web",
        choice3: "Charlie and the Chocolate Factory",
        choice4: "Alice in Wonderland",
        answer: 4
    },
    {
        question: "What measurement scale is used to determine wind speed?",
        choice1: "Beaufort scale",
        choice2: "Richter scale",
        choice3: "Synoptic scale",
        choice4: "Gusting scale",
        answer: 1
    },
    {
        question: "In which city were the 1992 Summer Olympics held?",
        choice1: "Atlanta",
        choice2: "Barcelona",
        choice3: "Sydney",
        choice4: "Seoul",
        answer: 2
    },
    {
        question: "How many sides does a Dodecahedron have?",
        choice1: "12",
        choice2: "24",
        choice3: "14",
        choice4: "20",
        answer: 1
    },
    {
        question: "The Statue of Liberty was a gift to the United States from which European country?",
        choice1: "Belgium",
        choice2: "Germany",
        choice3: "Spain",
        choice4: "France",
        answer: 4
    },
    {
        question: "Which traditional Spanish dance originated in Andalusia and is recognised by UNESCO as a heritage of humanity?",
        choice1: "Sardana",
        choice2: "Tango",
        choice3: "Flamenco",
        choice4: "Paso Doble",
        answer: 3
    },
    {
        question: "What is the biggest animal in the world?",
        choice1: "Blue whale",
        choice2: "Colossal Squid",
        choice3: "Giraffe",
        choice4: "African Elephant",
        answer: 1
    },
    {
        question: "The human body is made up of approximately how much water?",
        choice1: "40%",
        choice2: "50%",
        choice3: "60%",
        choice4: "70%",
        answer: 3
    },
    {
        question: "What is the world’s fastest species of bird?",
        choice1: "Golden eagle",
        choice2: "Peregrine falcon",
        choice3: "Frigatebird",
        choice4: "Penguin",
        answer: 2
    },
    {
        question: "Which artist famously cut off his own ear?",
        choice1: "Salvador Dali",
        choice2: "Pablo Picasso",
        choice3: "Claude Monet",
        choice4: "Vincent Van Gogh",
        answer: 4
    },
    {
        question: "What other country, besides the US, uses the US dollar as its official currency?",
        choice1: "Ecuador",
        choice2: "Canada",
        choice3: "Mexico",
        choice4: "United Kingdom",
        answer: 1
    },

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
}

//GRABS NEW AND RANDOM QUESTION FOR GAME & CHECKS IF ANY QUESTIONS ARE LEFT IF NOT THEN ENDS THE GAME
function getAQuestion() {
    if (allQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('currentQuestion', score);
        game.classList.add('hidden');
        endGame.classList.remove('hidden');
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
    }
}

// Goes through each choices
choices.forEach(choice => {
    choice.addEventListener("click", choices => {
        if (!answerAccepted) return;

        answerAccepted = false;
        const questionAnswer = currentQuestion.answer;
        const answerSelected = choice.dataset['number'];

        if (answerSelected == questionAnswer) {

            Swal.fire({
                position: '`top-end`',
                icon: 'success',
                title: 'GOOD JOB!',
                showConfirmButton: false,
                timer: 1500
            });
            incrementScore();
        } else {
            Swal.fire({
                position: '`top-end`',
                icon: 'error',
                title: `SORRY NOT RIGHT THE CORRECT ANSWER IS ${currentQuestion.answer}!`,
                showConfirmButton: false,
                timer: 1500
            });

        }
        progressText.innerText = `Question Number ${questionCounter} of ${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
        getAQuestion();
    }, 400);

});

incrementScore = () => {
    score++;
    scoreText.innerText = score++;
};
startGame();

startBtn.addEventListener("click", () => {
    homeView.classList.add('hidden');
    game.classList.remove('hidden');
});