/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let Who = ["The dog", "My grandma", "The mailman", "My bird"];
  let Action = ["ate", "peed", "crushed", "broke"];
  let What = ["my homework", "my phone", "the car"];
  let When = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const generateExcuse = excuseGenerate => {
    return Math.floor(Math.random() * excuseGenerate.length);
  };
  let ExcuseGenerated = `${Who[generateExcuse(Who)]} ${
    Action[generateExcuse(Action)]
  } ${What[generateExcuse(What)]} ${When[generateExcuse(When)]}`;

  document.getElementById("Excuse").innerHTML = ExcuseGenerated;
};
