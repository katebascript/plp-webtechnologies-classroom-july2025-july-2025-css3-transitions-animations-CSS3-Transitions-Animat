// =========================
// Part 2: Functions Example
// =========================

// Global variable → accessible everywhere
let globalNum = 10;

// Function with parameters & return value
function addNumbers(a, b) {
  // Local variable → only exists inside function
  let sum = a + b;
  return sum; // returns value to caller
}

// Reusable function that uses addNumbers()
function showSum() {
  let num1 = globalNum; // using global variable
  let num2 = 5;         // local variable
  let total = addNumbers(num1, num2); // call with parameters
  document.getElementById("result").innerText =
    `Sum of ${num1} + ${num2} = ${total}`;
}

// =============================
// Part 3: CSS + JS Integration
// =============================

// Function toggles "animate" class → triggers CSS transition
function animateBox() {
  let box = document.querySelector(".box2");
  box.classList.toggle("animate");
}

// Function toggles modal visibility
function toggleModal() {
  let modal = document.getElementById("modal");
  modal.classList.toggle("show"); // adds/removes class
}
