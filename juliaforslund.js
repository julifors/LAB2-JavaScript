// get all required document elements for script and save in variables

// Personal Form Validation
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
    persInfoVal.textContent = "Your information was successfully submitted!";
    persInfoVal.style.color = "#2ecc71";
  }
});

// QUIZ

// Validation required questions not left unanswered
// validation to be done when submit button is clicked
// show error message text if validation error - written in document under the incorrect field
// if errors corrected hide error message
// do not submit
// if no errors show success message

// SCORE AND CORRECT ANSWERS
// Calculating total score
// variable count
// label correct answers (radio, checkbox)
// for open-ended question: check if correct answers in input

// Show result of quiz
// no. correct answers out of total no. of answers
// display in displayResult div

// Correct answers display
// show correct answers on the page
// show correct answers at the end of the quiz
// mark or write correct answer in green on/by/under the question
