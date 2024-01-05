// PERSONAL FORM VALIDATION
const personalForm = document.getElementById("personalForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const fnameVal = document.getElementById("fnameVal");
const lnameVal = document.getElementById("lnameVal");
const emailVal = document.getElementById("emailVal");
const persInfoVal = document.getElementById("persInfoVal");

personalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameFormat = /^[a-zA-Z]+$/;
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  // Validation for fname field - required + contain only letters
  if (fname.value.match(nameFormat)) {
    fnameVal.textContent = " ";
  } else {
    fnameVal.textContent = "Invalid Format.";
    persInfoVal.textContent = "Submission unsuccessful. Try Again!";
    persInfoVal.style.color = "#ffd700";
  }

  // Validation for lname field - required + contain only letters
  if (lname.value.match(nameFormat)) {
    lnameVal.textContent = " ";
  } else {
    lnameVal.textContent = "Invalid Format.";
    persInfoVal.textContent = "Submission unsuccessful. Try Again!";
    persInfoVal.style.color = "#ffd700";
  }

  // Validation for email field - required + only valid format allowed
  if (email.value.match(emailFormat)) {
    emailVal.textContent = " ";
  } else {
    emailVal.textContent = "Please Enter A Valid Email Address.";
    persInfoVal.textContent = "Submission Unsuccessful. Try Again!";
    persInfoVal.style.color = "#ffd700";
  }

  // If all validation is passed, success message is shown
  if (
    fname.value.match(nameFormat) &&
    lname.value.match(nameFormat) &&
    email.value.match(emailFormat)
  ) {
    persInfoVal.textContent = "Your Information Was Successfully Submitted!";
    persInfoVal.style.color = "#2ecc71";
  }
});

// QUIZ FORM VALIDATION
const quiz = document.getElementById("quiz");
const quizVal = document.getElementById("quizVal");
const quizResult = document.getElementById("quizResult");

const Q1val = document.getElementById("Q1val");
const Q2val = document.getElementById("Q2val");
const Q3val = document.getElementById("Q3val");
const Q4val = document.getElementById("Q4val");
const Q5val = document.getElementById("Q5val");

const correctQ1 = document.getElementById("correctQ1");
const correctQ2 = document.getElementById("correctQ2");
const correctQ3 = document.getElementById("correctQ3");
const correctQ4 = document.getElementById("correctQ4");
const correctQ5 = document.getElementById("correctQ5");

// Validation required questions not left unanswered
// validation to be done when submit button is clicked
// show error message text if validation error - written in document under the incorrect field
// if errors corrected hide error message
// do not submit
// if no errors show success message
quiz.addEventListener("submit", (event) => {
  event.preventDefault();

  // getting user answers
  const inputQ1 = document.querySelector('input[name="Q1"]:checked');
  const inputQ2 = document.querySelector('input[name="Q2"]:checked');
  const inputQ3 = document.querySelectorAll('input[name="Q3"]:checked');
  const inputQ4 = document.querySelectorAll('input[name="Q4"]:checked');
  const inputQ5 = document.getElementById("Q5");

  // SCORE AND CORRECT ANSWERS
  // Calculating total score
  // label correct answers (radio, checkbox)

  // for open-ended question: check if correct answers in input

  // Show result of quiz
  // no. correct answers out of total no. of answers
  // display in quizResult div

  // Correct answers display
  // show correct answers on the page
  // show correct answers at the end of the quiz
  // mark or write correct answer in green on/by/under the question
  correctQ1.textContent = "Correct Answer: Chimera";
  correctQ2.textContent = "Correct Answer: Sleipnir";
  correctQ3.textContent = "Correct Answer: Lion + Eagle";
  correctQ4.textContent = "Correct Answer: Banshee + Púca";
  correctQ5.textContent =
    "Correct Answer: Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, Dopey";
});
