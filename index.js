var readlineSync = require('readline-sync');

var score = 0;

var topscorer = [
  {
    name: "Prajwal",
    score: "4"
  },
  {
    name: "Aishwary",
    score: "3"
  }
]

var questions = [
  {
    question: "In which year Python Was released ? ",
    answer: "1991"
  },
  {
    question: "Is Python Fully OOPs? ",
    answer: "Yes"
  },
  {
    question: "Is python High level Language ?",
    answer: "Yes"
  },
  {
    question: "Syntax for Comments in Python ?",
    answer: "#"
  },
  {
    question: "Is python Useful in AI & ML?",
    answer: "Yes"
  }
]

function welcome() {
  var userName = readlineSync.question("Enter Your Name here : ");
  console.log("Welcome " + userName);
  console.log("\n Lets see how much Do you know python Programming language? \n\n ");
}

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    score = score + 1;
    console.log("You are right")
  }
  else {
    console.log("You are wrong")
  }

  console.log("Your score is : " + score);
  console.log("-----------------------");

}


function play() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("Here is your Final Score: ", score);

  console.log("Check the list of Top Scorer , If you have scored more ,Tell me I'll add your name ");

  topscorer.map(score => console.log(score.name, " : ", score.score))
}

welcome();
play();
showScores();