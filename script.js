"use strict;";

let countNumber = 0;
const array = [];

window.addEventListener("load", initArrayLoop);

console.log("start count");
function initArrayLoop() {
  if (countNumber < 22) {
    setTimeout(arrayLoop, 1000);
  }
}
function arrayLoop() {
  if (countNumber < 9) {
    array.unshift(countNumber);
    countNumber++;
    console.log(array);
  } else {
    array.unshift(countNumber);
    array.length = 9;
    countNumber++;
    console.log(array);
  }

  initArrayLoop();
}
