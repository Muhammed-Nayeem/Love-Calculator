"use strict";

/*Love Calculation Main Function*/
function loveCalc() {
  const nameOne = document.getElementById("name-one").value;
  const nameTwo = document.getElementById("name-two").value;

  /*Invoking randomLoveCalc Function*/
  randomLoveCalc(nameOne, nameTwo);
}
/*Calculation and validity checking*/
function randomLoveCalc(nameOne, nameTwo) {
  let statusOne = document.getElementById("statement-one");

  /*Validity Checking the input fields*/
  if (typeof nameOne !== String && nameOne.length <= 2) {
    alert("Entire Name Must be String and should've at least 3 Characters!");
  }
  if (typeof nameTwo !== String && nameTwo.length <= 2) {
    alert("Entire Name Must be String and should've at least 3 Characters!");
  } else {
    const randomLove = Math.floor(Math.random() * 100);
    statusOne.innerHTML = `${nameOne} and ${nameTwo}'s Have Love In between them : ${randomLove}%`;

    /*Invoking loveCompare Function*/
    loveCompare(randomLove);
  }
}
/*Love Compare Status Function*/
function loveCompare(randomLove) {
  let statusTwo = document.getElementById("statement-two");

  /*Love Compare Status*/
  if (randomLove <= 1 || randomLove <= 25) {
    statusTwo.innerHTML = `"POOR" Relationship`;
  } else if (randomLove <= 26 || randomLove <= 50) {
    statusTwo.innerHTML = `"AVERAGE" Relationship`;
  } else if (randomLove <= 51 || randomLove <= 75) {
    statusTwo.innerHTML = `"BEAUTIFUL" Relationship`;
  } else if (randomLove <= 76 || randomLove <= 100) {
    statusTwo.innerHTML = `"LOVELY" Relationship`;
  }
}
