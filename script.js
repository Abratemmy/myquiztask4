  //initialize score
  let score = 0;

  //get answer on click
  function getanswer(e){
      let questionIndex = e.target.name
      let givenAnswer = e.target.id
      let index = (givenAnswer.split('')[1])
      let correctAnswer = myQuestions[index].correctAnswer
      if (correctAnswer === questionIndex) {
        document.getElementById(givenAnswer).style.background = "green"
        score += 1
        console.log(score)
      }else{
        document.getElementById(givenAnswer).style.background = "red"
      }
      let className = event.target.className
      disable(className)
  }

  //disable all button after choosen option on a question before nexting
function disable(classname){
  let allElement = document.querySelectorAll(`.${classname}`)
  allElement.forEach(button => {
    button.disabled = true
  });
}
    // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    myQuestions.forEach(()=>{

    })
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(index in currentQuestion.answers){

          answers.push(
            //changes input type from checkbox to button and put the answer next to letter in the value
            `<label>
              <input type="button" name="${index}"  id ="${index + questionNumber}" class = "question${questionNumber}" value="${currentQuestion.answers[index]}" onclick= "getanswer(event)">
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

function showResults(){
  document.getElementById('results').innerHTML = `${score} out of ${myQuestions.length}`;
}
  
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}
  
function showNextSlide() {
  showSlide(currentSlide + 1);
}
  
function showPreviousSlide() {
  showSlide(currentSlide - 1);
}
  
    // Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "_____ is an anction word?",
    answers: {
      a: "Noun",
      b: "Pronoun",
      c: "Verb"
    },
    correctAnswer: "c"
  },
  {
    question: "____ is a name of a person animal, place and thing?",
    answers: {
      a: "Verb",
      b: "Adverb",
      c: "Noun"
    },
    correctAnswer: "c"
  },
  {
  question: "Example of wild annimals are _____",
    answers: {
      a: "cat",
      b: "Lion",
      c: "goat",
      
    },
    correctAnswer: "b"
  },
  {
  question: "Nigeria has bhow many states?",
    answers: {
      a: "36",
      b: "35",
      c: "26",
    
    },
    correctAnswer: "a"
  }
];
  
// Kick things off
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
// submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

  