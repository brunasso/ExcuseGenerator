/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let WordsWho = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let WordsAction = ['ate', 'peed', 'crushed', 'broke'];
  let WordsWhat = ['my homework', 'my phone', 'the car'];
  let WordsWhen = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  function generateExcuse() {
      let Who = WordsWho[Math.floor(Math.random() * WordsWho.length)];
      let Action = WordsAction[Math.floor(Math.random() * WordsAction.length)];
      let What = WordsWhat[Math.floor(Math.random() * WordsWhat.length)];
      let When = WordsWhen[Math.floor(Math.random() * WordsWhen.length)];
      
      return `${Who} ${Action} ${What} ${When}`;
  }

  document.getElementById('excuse').innerHTML = generateExcuse();

};
