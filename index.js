var readlineSync = require('readline-sync');

console.log("Please tell what is your good name: ")

var userIp = readlineSync.question()

var score = 0

function greetings(userIp) {
  console.log("Hi " + userIp + "\n" + "Welcome to DO YOU KNOW Shreyansh")
}

function qna(question) {
  for (var i = 0; i < question.length; i++) {
    console.log(question[i].question)
    var userAnswer = readlineSync.question();
    if (question[i].answer === userAnswer.toUpperCase()) {
      console.log("your answer " + userAnswer + " is correct")
      score = score + 1
    }
    else {
      console.log("your answer is incorrect!!!")
    }
    console.log("Your Score is: ", score, "\n")
    console.log("----------------")
  }
}


var questions = [{
  question: "Where do I live? ",
  answer: "RAIPUR"
}, {
  question: "Where do I work? ",
  answer: "TCS"
}, {
  question: "Who is my favourite Marvel Character? ",
  answer: "IRON MAN"
}, {
  question: "From where did I complete my graduation? ",
  answer: "CSVTU"
}, {
  question: "Who is my favourite DC character? ",
  answer: "FLASH"
}]

greetings(userIp)
qna(questions)


//Mistakes I did:
// 1) questions I wrote seperately than I club them in one single array