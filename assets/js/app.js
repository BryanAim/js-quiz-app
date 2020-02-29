const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// using arrays make it easy to iterate over the questions
const myQuestions = [
  {
    question: "Who is the Strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Isale, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "Sitepoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business so stop asking!"
    },
    correctAnswer: "d"
  },
];

// function to build the quiz
function buidQuiz() {
  // we'll need a place to store all the HTML output including questions and answer choices
  const output = [];

  // build html for each question and loop over them
  myQuestions.forEach((currentQuestion, questionNumber)
  //value, index
  => {
    // we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (const letter in currentQuestion.answers) {
  // ...add an HTML radio button 
  answers.push(
    `<label>
  <input type = "radio" name = "question${questionNumber}" value ="${letter}">
  ${letter} : ${currentQuestion.answers[letter]}
  </label>`
  );
}

// add these questions and answers to the output
output.push(
  ` <div class = "question">
  ${currentQuestion.question} </div>
  <div class="answers">
  ${answers.join('')}
  </div>`
);

  });
  // finally combine output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}


// function to show results
function showResults() {

}

// display quiz right away
buidQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);