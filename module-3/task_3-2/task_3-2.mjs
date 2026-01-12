"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let up = "";
for (let i = 1; i <= 10; i++) {
  up += i + (i < 10 ? " " : "");
}
printOut(up);



let down = "";
for (let i = 10; i >= 1; i--) {
  down += i + (i > 1 ? " " : "");
}
printOut(down);
printOut(newLine);

printOut("--- Part 2 og 3----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const number = 45
let guess=""
const start = Date.now();
let attempts= 0;


while (guess != number) {
    guess= Math.floor(Math.random() * 1000000);
    attempts += 1;
}
const ms = Date.now() - start;

printOut(attempts);
printOut(ms);
printOut(guess);
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const primesWhile = [];
let n = 2;
while (n < 200) {
  let isPrime = true;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primesWhile.push(n);
  n++;
}
printOut(primesWhile.join(" "));
printOut(newLine);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r = 1; r <= 7; r++) {
  let row = "";
  for (let k = 1; k <= 9; k++) {
    row += `K${k}R${r}` + (k < 9 ? " " : "");
  }
  printOut(row);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalPoints = 236;
const students = [];
for (let i = 1; i <= 5; i++) {
  const points = Math.floor(Math.random() * totalPoints) + 1; // 1..236
  const percent = (points / totalPoints) * 100;
  let grade;
  if (percent >= 89) grade = "A";
  else if (percent >= 77) grade = "B";
  else if (percent >= 65) grade = "C";
  else if (percent >= 53) grade = "D";
  else if (percent >= 41) grade = "E";
  else grade = "F";
  students.push({ points, percent, grade });
  printOut(`Student ${i}: ${points} poeng (${percent.toFixed(1)}%) => karakter ${grade}`);
}
printOut(newLine);
printOut("Resultater:");
for (let i = 0; i < students.length; i++) {
  const s = students[i];
  printOut(`${i + 1}. ${s.points} poeng (${s.percent.toFixed(1)}%) => karakter ${s.grade}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollDice() {
  const roll = [];
  for (let i = 0; i < 6; i++) roll.push(Math.floor(Math.random() * 6) + 1);
  return roll;
}
function countsFor(roll) {
  const counts = [0, 0, 0, 0, 0, 0, 0];
  for (const d of roll) counts[d]++;
  return counts;
}
function isFullStraight(roll) {
  const counts = countsFor(roll);
  return counts.slice(1).every((c) => c === 1);
}
function isThreePairs(roll) {
  const counts = countsFor(roll);
  return counts.slice(1).filter((c) => c === 2).length === 3;
}
function isTwoAndFour(roll) {
  const counts = countsFor(roll);
  return (
    counts.slice(1).filter((c) => c === 2).length === 1 &&
    counts.slice(1).filter((c) => c === 4).length === 1
  );
}
function isAllSame(roll) {
  const counts = countsFor(roll);
  return counts.slice(1).some((c) => c === 6);
}
function triesUntil(predicate) {
  let attempts = 0;
  let last;
  do {
    attempts++;
    last = rollDice();
  } while (!predicate(last));
  return { attempts, last };
}
let res = triesUntil(isFullStraight);
printOut(`Full straigh etter ${res.attempts} kast.${res.last.join(" ")}`);
res = triesUntil(isThreePairs);
printOut(`3 par etter ${res.attempts} kast. ${res.last.join(" ")}`);
res = triesUntil(isTwoAndFour);
printOut(`tårn  etter ${res.attempts} kast. ${res.last.join(" ")}`);
res = triesUntil(isAllSame);
printOut(` yahtzee etter ${res.attempts} kast.  ${res.last.join(" ")}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
