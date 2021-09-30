var chalk=require('chalk');
var readLineSync=require('readline-sync');
var userName= readLineSync.question(chalk.cyan("What is your Name:"));
var score=0;
console.log(chalk.red("welcome "+ userName +" at DO YOU KNOW KAUSHIK? quiz"));
console.log("------------------------------------")
// play function
function play(question, answer){
    var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Congrats! You are Right!!")
    score++;
  }
  else{console.log("Sorry! You are wrong!!")
  }
  console.log("Current Score:",score);
  console.log("----------------------------");
}

// array of questions
var Questions=[{
  question:chalk.bgMagenta("Which state does Kaushik lives at present? "),answer:"Assam"},
{question:chalk.bgCyan("From which state did he completed his Engineering? "),answer:"Karnataka"},
{question:chalk.bgRed("Whats is Surname? "),answer:"Mazumdar"},
{question:chalk.bgYellow("Does he have any siblings? "),answer:"No"},
{question:chalk.bgMagenta("Does he like eating fruits? "),answer:"No"},
{question:chalk.blue.red("Does he sings well? "), answer:"Yes"},
{question:chalk.blue.bold("Does he dances better than you? "), answer:"Yes"},
{question:chalk.red.bold("Is he the most charming Man in the world? "), answer:"Yes"}]

for(i=0;i<Questions.length;i++){
  var userQuestions=Questions[i]
  play(userQuestions.question,userQuestions.answer)
}
console.log(chalk.bgCyan(" Yaay!!You scored:",score+"/"+Questions.length));
console.log(chalk.bgCyan("Thank for playing"));
