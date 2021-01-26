let score = 0;
const scores = [];
let num;
let time = 100;
let questions = 0;
let timer;

const quizContent = [
  (first = {
    question: "Variables declared with 'var' are:",
    1: "Function scoped",
    2: "Block scoped",
    3: "Global scoped",
    correct: 1,
    status: true,
  }),
  (second = {
    question: "JavaScript is an extension of Java.",
    1: "True",
    2: "They are the same",
    3: "False",
    correct: 3,
    status: true,
  }),
  (third = {
    question: "What's the correct way to declare a variable in JavaScript",
    1: "var a = 1;",
    2: "a = 1;",
    3: "a ==> 1",
    correct: 1,
    status: true,
  }),
  (fourth = {
    question: "Which is the latest version of JavaScript?",
    1: "ES5",
    2: "ES6",
    3: "ES2000",
    correct: 2,
    status: true,
  }),
  (fifth = {
    question: "Which one is a valid for loop",
    1: "for i=0; (i<n);",
    2: "for (var i=0; i< num)",
    3: "for (var i=0; i< num; i++)",
    correct: 3,
    status: true,
  }),
];

function displayQuestion() {
  num = Math.floor(Math.random() * quizContent.length);
  if (quizContent[num].status) {
    const node = document.createElement("div");
    const elem = document.querySelector(".questionCard").appendChild(node);
    elem.innerHTML = `
    <div id="card" class="card${num}" style="width: 18rem;">
    <div class="card-body" id="card">
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
    quizContent[num].status = false;
  } else displayQuestion();
}

function checkAnswer(event) {
  if (event.target.id == quizContent[num].correct) {
    document.querySelector(".alert-success").classList.remove("d-none");
    setTimeout(function () {
      document.querySelector(".alert-success").classList.add("d-none");
    }, 700);
    score += time;
    document.querySelector(".counter").innerHTML = `Your score: ${score}`;
    document.querySelector(".card" + num).classList.add("d-none");
    console.log(questions);
    if (questions === quizContent.length) final();
    else displayQuestion();
  } else {
    document.querySelector(".alert-danger").classList.remove("d-none");
    setTimeout(function () {
      document.querySelector(".alert-danger").classList.add("d-none");
    }, 700);
    time -= 10;
  }
}
////////
function displayTime() {
  let mins = String(Math.trunc(time / 60)).padStart(2, 0);
  let secs = String(time % 60).padStart(2, 0);
  let timeFormat = `${mins}:${secs}`;
  document.querySelector("#timeDisplay").innerText = `Time: ${timeFormat}`;
  console.log(time);
  if (time < 0) final();
  time--;
}

const interval = function () {
  document.querySelector("#startbtn").classList.add("d-none");
  timer = setInterval(displayTime, 1000);
};

function final() {
  clearInterval(timer);
  document.querySelector("#timeDisplay").classList.add("d-none");
  document.querySelector(".counter").classList.add("d-none");
  document.querySelector(".questionCard").innerHTML = `
  <div class="card" id="card">
  <div class="card-body">
    <h5 class="card-title">Congratulations!</h5>
    <p class="card-text">Your highest score is: ${score}</p>
    <button class="btn btn-primary" onClick="newGame()">Try again</button>
  </div>
</div>`;
  scores.push(score);
  localStorage.scores = scores;
}

function newGame() {
  score = 0;
  questions = 0;
  time = 100;
  num = 0;
  document.querySelector(".questionCard").innerHTML = "";
  document.querySelector("#timeDisplay").classList.remove("d-none");
  document.querySelector(".counter").classList.remove("d-none");
  document.querySelector(".counter").innerHTML = `Your score: ${score}`;

  for (let i = 0; i < quizContent.length; i++) {
    quizContent[i].status = true;
    console.log(quizContent[i].status, i);
  }
  displayQuestion();
  interval();
}

document.querySelector("#startbtn").addEventListener("click", displayQuestion);
document.querySelector("#startbtn").addEventListener("click", interval);
