// `use script`;
const identify = document.querySelector("#userInputField");
const userInputForm = document.getElementById("userInputForm");
const button = document.getElementById("button");
const welcome = document.getElementById("welcome");
const btn = document.querySelector(".btn-design");
// const instruction0 = document.getElementById("instruction0");
const instruction1 = document.querySelector(".instruction1");
const nam = identify.value;

// document.getElementById("welcome").textContent;
document.querySelector(".submit").addEventListener("click", function () {
  // const nam = identify.value;
  console.log(nam);
  userInputForm.classList.add("hide");
  welcome.classList.remove("hide");
  welcome.textContent = `${welcome.textContent} ${identify.value}!!`;
  btn.classList.remove("hide");
});
///////////////////////////////////////////

let currentIndex = 0;
const contents = [`PLEASE PICK A NUMBER IN YOUR MIND`];

function changeContent() {
  // if (currentIndex > contents.length) {
  //   currentIndex = 0;
  // }
  //////

  /////
  welcome.textContent = contents[currentIndex];
  currentIndex++;

  if (currentIndex > 1) {
    button.classList.remove("hide");
    btn.classList.add("hide");
    instruction1.classList.remove("hide");
  }
}

btn.addEventListener("click", changeContent);
//////////////////////////////////////////////////////////////////////

let guess = 0;
let clickCount = 0;

// Function to perform the operation
function performOperation() {
  clickCount++;
  const operation = Math.random() < 0.5 ? "add" : "subtract";
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Perform operation
  // if ((clickCount = 1)) {
  //   instruction1.classList.add("hide");
  // }

  if (clickCount < 6) {
    instruction1.classList.add("hide");
    if (operation === "add") {
      guess += randomNumber;
    } else {
      guess -= randomNumber;
    }
  }

  if (clickCount === 6) {
    // Final guess value
    guess = guess + 0;
    // document.getElementById("button").disabled = true;
    document.getElementById("result").textContent =
      "subtract the number you picked at first from current answer";
  } else {
    // Display the operation and random number
    document.getElementById(
      "result"
    ).textContent = `${operation} ${randomNumber}  `;
  }

  if (clickCount === 7) {
    // Final guess value
    // guess = guess + 0;
    document.getElementById("button").disabled = true;
    button.classList.add("hide");
    document.getElementById("result").textContent =
      "your answer should be : " + guess;
  }
}

// Event listener for button click
document.getElementById("button").addEventListener("click", performOperation);
