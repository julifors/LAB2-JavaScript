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

  let nameFormat = /^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/;
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  // Validation for fname field - required + contain only letters
  if (fname.value.match(nameFormat)) {
    fnameVal.textContent = " ";
  } else {
    fnameVal.textContent =
      "Please Enter A Valid Name Using Only Letters, Spaces, Or Hyphens.";
    persInfoVal.textContent = "Submission Unsuccessful. Try Again!";
    persInfoVal.style.color = "#ffd700";
  }

  // Validation for lname field - required + contain only letters
  if (lname.value.match(nameFormat)) {
    lnameVal.textContent = " ";
  } else {
    lnameVal.textContent =
      "Please Enter A Valid Name Using Only Letters, Spaces, Or Hyphens.";
    persInfoVal.textContent = "Submission Unsuccessful. Try Again!";
    persInfoVal.style.color = "#ffd700";
  }

  // Validation for email field - required + only valid format allowed
  if (email.value.match(emailFormat)) {
    emailVal.textContent = " ";
  } else {
    emailVal.textContent = "Please Enter A Valid Email Address.";
    persInfoVal.textContent =
      "Oops! It Seems There Was An Issue With Your Submission. Please Review Your Entries and Try Submitting Again.";
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

// QUIZ FORM
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
const correctQ6 = document.getElementById("correctQ6");

quiz.addEventListener("submit", (event) => {
  event.preventDefault();

  // function for iterating checked values for checkbox questions and adding to array
  function getCheckedValues(input) {
    var checkedValues = [];
    input.forEach(function (x) {
      checkedValues.push(x.value);
    });
    return checkedValues;
  }

  // getting user answers
  const inputQ1 = document.querySelector('input[name="Q1"]:checked');
  const inputQ2 = document.querySelector('input[name="Q2"]:checked');
  const inputQ3 = document.querySelectorAll('input[name="Q3"]:checked');
  const inputQ4 = document.querySelectorAll('input[name="Q4"]:checked');
  const inputQ5 = document.querySelectorAll('input[name="Q5"]:checked');
  const inputQ6 = document.getElementById("Q6").value.trim();

  // SCORE AND CORRECT ANSWERS
  // Calculating total score - 12 max points, 1pt per Q1-Q5, 7 max for Q5

  let score = 0;

  // Q1 - Q5
  if (inputQ1 && inputQ1.value === "Chimera") {
    score++;
  }
  if (inputQ2 && inputQ2.value === "Sleipnir") {
    score++;
  }
  if (
    getCheckedValues(inputQ3).indexOf("Lion") !== -1 &&
    getCheckedValues(inputQ3).indexOf("Eagle") !== -1 &&
    getCheckedValues(inputQ3).indexOf("Camel") === -1 &&
    getCheckedValues(inputQ3).indexOf("Crocodile") === -1 &&
    getCheckedValues(inputQ3).indexOf("Snake") === -1
  ) {
    score++;
  }
  if (
    getCheckedValues(inputQ4).indexOf("Banshee") !== -1 &&
    getCheckedValues(inputQ4).indexOf("Púca") !== -1 &&
    getCheckedValues(inputQ4).indexOf("Pegasus") === -1 &&
    getCheckedValues(inputQ4).indexOf("Serpopard") === -1 &&
    getCheckedValues(inputQ4).indexOf("Feilian") === -1
  ) {
    score++;
  }
  if (
    getCheckedValues(inputQ5).indexOf("Parashurama") !== -1 &&
    getCheckedValues(inputQ5).indexOf("Rama") !== -1 &&
    getCheckedValues(inputQ5).indexOf("Krishna") !== -1 &&
    getCheckedValues(inputQ5).indexOf("Durga") === -1 &&
    getCheckedValues(inputQ5).indexOf("Shiva") === -1
  ) {
    score++;
  }

  // Q6 - bonus question
  const dwarfNames = [
    "doc",
    "grumpy",
    "happy",
    "sleepy",
    "bashful",
    "sneezy",
    "dopey",
  ];

  // array for storing all used words
  const usedWords = [];

  // Making input lowercase + Splitting the input into array of words, removing commas and spaces using RegEx
  // inputQ6 already trimmed when getting it!
  const inputWords = inputQ6.toLowerCase().split(/[,\s]+/);

  // Checking each word in the input against dwarfNames + checking that word is not already in used words
  inputWords.forEach(function (word) {
    if (!usedWords.includes(word) && dwarfNames.includes(word)) {
      score++;
      usedWords.push(word); // adding word to used words array
    }
  });

  // QUIZ VALIDATION
  // Validation required questions not left unanswered (except Q6)
  // show error message text if validation error - written in document under the incorrect field
  // if errors corrected hide error message
  let unanswered = 5;
  if (inputQ1) {
    unanswered--;
    Q1val.textContent = "";
  } else {
    Q1val.textContent = "This Is A Required Question!";
  }
  if (inputQ2) {
    unanswered--;
    Q2val.textContent = "";
  } else {
    Q2val.textContent = "This Is A Required Question!";
  }
  if (inputQ3.length > 0) {
    unanswered--;
    Q3val.textContent = "";
  } else {
    Q3val.textContent = "This Is A Required Question!";
  }
  if (inputQ4.length > 0) {
    unanswered--;
    Q4val.textContent = "";
  } else {
    Q4val.textContent = "This Is A Required Question!";
  }
  if (inputQ5.length > 0) {
    unanswered--;
    Q5val.textContent = "";
  } else {
    Q5val.textContent = "This Is A Required Question!";
  }

  if (unanswered > 0) {
    quizVal.textContent =
      "Please Answer All Required Questions Before Submitting The Form.";
    quizVal.style.color = "#ffd700";
    correctQ1.textContent = "";
    correctQ2.textContent = "";
    correctQ3.textContent = "";
    correctQ4.textContent = "";
    correctQ5.textContent = "";
    correctQ6.textContent = "";
    quizResult.textContent = "";
    quizResult.style.border = "none";
  } else {
    // Show result of quiz and success message for passing validation
    quizVal.textContent =
      "All Required Questions Are Answered! Thank You For Your Participation!";
    quizVal.style.color = "#2ecc71";
    quizResult.textContent = `Your Score: ${score} / 12 Points.`;
    quizResult.style.border = "1px dotted";

    // Correct answers display
    // showing correct answers by each question at the end of the quiz
    correctQ1.textContent = "Correct Answer: Chimera";
    correctQ2.textContent = "Correct Answer: Sleipnir";
    correctQ3.textContent = "Correct Answer: Lion + Eagle";
    correctQ4.textContent = "Correct Answer: Banshee + Púca";
    correctQ5.textContent = "Correct Answer: Parashurama + Rama + Krishna";
    correctQ6.textContent =
      "Correct Answer: Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, Dopey";
  }
});
