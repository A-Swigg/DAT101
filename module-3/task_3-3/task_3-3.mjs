"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  printOut(formatted);
}
printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function daysUntilRelease(releaseDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const utcRelease = Date.UTC(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const diffMs = utcRelease - utcToday;
  return Math.floor(diffMs / oneDay);
}
function announceReleaseCountdown() {
  const today = printTodaysDate();
  const releaseDate = new Date(2025, 4, 14); 
  const daysLeft = daysUntilRelease(releaseDate);
  const releaseFormatted = releaseDate.toLocaleDateString("no-NB", { year: "numeric", month: "long", day: "numeric" });
  if (daysLeft > 1) {
    printOut(`Det er ${daysLeft} dager igjen til 2XKO lanseres (${releaseFormatted}). Gjør deg klar for kamp!`);
  } else if (daysLeft === 1) {
    printOut(`Det er 1 dag igjen til 2XKO lanseres (${releaseFormatted}).`);
  } else if (daysLeft === 0) {
    printOut(`I dag er lanseringsdagen for 2XKO! Håper alle nerdene koser seg med league of legends B)`);
  } else {
    printOut(`2XKO ble lansert for ${Math.abs(daysLeft)} dager siden (${releaseFormatted}). Håper du koser deg med spillet!✝️🤯👽🧐`);
  }
}
announceReleaseCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleMetrics(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  printOut(`Sirkel med radius ${radius}:`);
  printOut(`Diameter: ${diameter}`);
  printOut(`Omkrets: ${circumference.toFixed(2)}`);
  printOut(`Areal: ${area.toFixed(2)}`);
}
printCircleMetrics(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectanglePeramiter(height, width){
  const peramiter = height * 2 + width * 2;
  printOut(`peramiter er ${peramiter}`);
  const area = height *widthS;
  printOut(`area er ${area}`);
}
printRectanglePeramiter(3, 6);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
