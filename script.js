// create add1, add2, add3 functions for home
// create add1, add2, add3 functions for away

// link buttons to corresponding function

// display the outcome in h4 elements

// reset score button

// add an if statement - if home is more than away green, if away is more green and then equal is yellow

let homeCountEl = document.getElementById("home-count-el")
let awayCountEl = document.getElementById("away-count-el")



let countHome = 0
let countAway = 0

function add1Home() {
  countHome += 1
  homeCountEl.textContent = countHome
}

function add2Home() {
  countHome += 2
  homeCountEl.textContent = countHome
}

function add3Home() {
  countHome += 3
  homeCountEl.textContent = countHome
}

function add1Away() {
  countAway += 1
  awayCountEl.textContent = countAway
}

function add2Away() {
  countAway += 2
  awayCountEl.textContent = countAway
}

function add3Away() {
  countAway += 3
  awayCountEl.textContent = countAway
}

function resetScore() {
  awayCountEl.textContent = 0
  homeCountEl.textContent = 0
  countHome = 0
  countAway = 0
}