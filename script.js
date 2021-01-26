let score = 0;
let num;
let time = 120;
let questions = 0;
let timer;

const quizContent = [
  (first = {
    question: "Who's the best???",
    1: "Me",
    2: "You",
    3: "Everybody",
    correct: 3,
    status: true,
  }),
  (second = {
    question: "What's the capital of Canada",
    1: "New York",
    2: "Rome",
    3: "Ottawa",
    correct: 3,
    status: true,
  }),
  (third = {
    question: "Planet Earth is:",
    1: "Third from the Sun",
    2: "First from the Sun",
    3: "Fifth from the Sun",
    correct: 1,
    status: true,
  }),
  (fourth = {
    question: "Who invented JavaScript?",
    1: "Shiva",
    2: "Luca",
    3: "Batman",
    correct: 2,
    status: true,
  }),
  (fifth = {
    question: "Who founded UofT?",
    1: "Jordan Peterson",
    2: "Joe Rogan",
    3: "The Queen",
    correct: 3,
    status: true,
  }),
];

console.log(quizContent);

function displayQuestion() {
  num = Math.floor(Math.random() * quizContent.length);
  // console.log(num);
  // console.log(quizContent[num].question);
  if (quizContent[num].status) {
    const node = document.createElement("div");
    const elem = document.querySelector(".questionCard").appendChild(node);
    elem.innerHTML = `<div id="card" class="card${num}" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Question:</h5>
        <p class="card-text">${quizContent[num].question}</p>
        <ol id="answers-list">
        <li class="answer1" onClick="checkAnswer(event)" id="1">${quizContent[num][1]}</li>
        <li class="answer2" onClick="checkAnswer(event)" id="2">${quizContent[num][2]}</li>
        <li class="answer3" onClick="checkAnswer(event)" id="3">${quizContent[num][3]}</li>
        </ol>
    </div>
    </div>`;
    questions++;

    ///call final screen
    quizContent[num].status = false;
  } else displayQuestion();
}

function checkAnswer(event) {
  console.log(quizContent[num].correct);
  console.log(event.target.id);
  if (event.target.id == quizContent[num].correct) {
    console.log("correct");
    score += time;
    document.querySelector(".counter").innerHTML = score;
    document.querySelector(".card" + num).classList.add("d-none");
    console.log(questions);
    if (questions === quizContent.length) {
      clearInterval(timer);
      return;
    } else displayQuestion();
    /////call next question func
  } else {
    console.log("wrong");
    time -= 10;
  }
}
////////
function displayTime() {
  // if (interval) return;
  let mins = String(Math.trunc(time / 60)).padStart(2, 0);
  let secs = String(time % 60).padStart(2, 0);
  let timeFormat = `${mins}:${secs}`;
  document.querySelector("#timeDisplay").innerText = timeFormat;
  console.log(time);
  if (time < 0) clearInterval(timer);
  time--;
}

const interval = function () {
  document.querySelector("#startbtn").classList.add("d-none");
  timer = setInterval(displayTime, 1000);
};

function final() {
  document.querySelector(".questionCard").innerHTML = ``;
}

document.querySelector("#startbtn").addEventListener("click", displayQuestion);
document.querySelector("#startbtn").addEventListener("click", interval);
