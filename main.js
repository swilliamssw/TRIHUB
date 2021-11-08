const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("choice-text"));
const progressText = (document.querySelector("#progressText"));
const scoreText = (document.querySelector("#score"));
const progressBarFull = (document.querySelector("progressBarFull"));

let currentQuestion = {}
let acceptingAnwser = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let question = [{
        question: "what is the anwser to this question?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        anwser: 1
    },
    {
        question: "what is the anwser to this question?",
        choice1: "<scriptfdngnfdgn>",
        choice2: "<javascriptndngdfhn>",
        choice3: "<jsdfbgndfnf>",
        choice4: "<scriptingfgddfg>",
        anwser: 4
    },
    {
        question: "what is the anwser to this question?",
        choice1: "<scriptngfdnbdgf>",
        choice2: "<javascripffdgnfdt>",
        choice3: "<jsfgnfgdn>",
        choice4: "<scriptinngfdngdg>",
        anwser: 3
    },
    {
        question: "what is the anwser to this question?",
        choice1: "<scripfgndfgndt>",
        choice2: "<javascrfngfdnbgipt>",
        choice3: "<jsgfgnfd>",
        choice4: "<scriptifdngfdnng>",
        anwser: 1
    }
]