// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html


function generateRandomNumber() {
  return Math.floor(Math.random() * 101); 
}
let number1 = generateRandomNumber();
let number2 = generateRandomNumber();

// Iteration 3: Creating variables required to make the game functional

let score = 0;
let timerSeconds = 60; 
let isGameOver = false;


let number1 = generateRandomNumber();
let number2 = generateRandomNumber();
let number3; 

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3Element = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional

function randomizeNumbers() {
    number1 = generateRandomNumber();
    number2 = generateRandomNumber();
    number3 = generateRandomNumber();
    
    // Update the displayed numbers on the HTML
    document.getElementById("number1").textContent = number1;
    document.getElementById("number2").textContent = number2;
    number3Element.textContent = "?"; 
  }
  
  // Call this function when the game starts or when a new question is needed
  randomizeNumbers();

// Iteration 6: Making the Operators (button) functional

// Additional variables for the selected operator
let selectedOperator;

// Function to randomly select an operator from the list
function getRandomOperator() {
  const operators = ["+", "-", "*", "/", "%"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

// Function to update the operator display on the HTML
function updateOperatorDisplay(operator) {
  document.getElementById("operator").textContent = operator;
}

// Function to handle operator button click
function operatorButtonClick(operator) {
  selectedOperator = operator;
  updateOperatorDisplay(selectedOperator);
}

// Attach click event listeners to operator buttons
document.getElementById("addition-button").addEventListener("click", function () {
  operatorButtonClick("+");
});

document.getElementById("subtraction-button").addEventListener("click", function () {
  operatorButtonClick("-");
});

document.getElementById("multiplication-button").addEventListener("click", function () {
  operatorButtonClick("*");
});

document.getElementById("division-button").addEventListener("click", function () {
  operatorButtonClick("/");
});

document.getElementById("modulo-button").addEventListener("click", function () {
  operatorButtonClick("%");
});


// Iteration 7: Making Timer functional

let timerInterval;

function startTimer() {
  timerInterval = setInterval(function () {
    if (timerSeconds > 0) {
      timerSeconds--;
      // Update the timer display on the HTML if needed
    } else {
      endGame();
    }
  }, 1000);
}

// Call startTimer() when the game starts

function endGame() {
  clearInterval(timerInterval);
  isGameOver = true;
  
}
