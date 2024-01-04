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
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    fname.value.match(nameFormat) &&
    lname.value.match(nameFormat) &&
    email.value.match(emailFormat)
  ) {
    persInfoVal.textContent =
      "Your information has been successfully submitted!";
  }

  if (
    !fname.value.match(nameFormat) &&
    lname.value.match(nameFormat) &&
    email.value.match(emailFormat)
  ) {
    fnameVal.textContent = "Invalid First Name Format!";
    persInfoVal.textContent = "Submission unsuccessful. Try Again!";
  }

  if (
    fname.value.match(nameFormat) &&
    !lname.value.match(nameFormat) &&
    email.value.match(emailFormat)
  ) {
    lnameVal.textContent = "Invalid Last Name Format!";
    persInfoVal.textContent = "Submission unsuccessful. Try Again!";
  }

  if (
    fname.value.match(nameFormat) &&
    lname.value.match(nameFormat) &&
    !email.value.match(emailFormat)
  ) {
    emailVal.textContent = "Invalid Email Format!";
    persInfoVal.textContent = "Submission unsuccessful. Try Again!";
  } else {
    persInfoVal.textContent = "Submission unsuccessful due to missing or invalid information. Try Again!";
  }
});

// Validation for fname and lname fields - required + contain only letters
// use regular expression to match input to valid format
// if not valid or empty
// show error message text - written in document under the incorrect field
// do not submit
// else return input

// Validation for email field - valid format
// use regular expression to match input to valid format
// if not valid or empty
// show error message text - written in document under the incorrect field
// do not submit
// else return input

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
