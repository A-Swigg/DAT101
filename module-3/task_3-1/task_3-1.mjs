"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
//parrt 1
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime == 6) {
  printOut("klokken er 6, det er for tidlig");
}
if (wakeUpTime == 7) {
  printOut("klokken er 7, passe tid");
}
if (wakeUpTime == 8) {
  printOut("klokken er 8, du er for sen");
}
printOut(newLine);
//part2 
wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut ("klokken er 7, passe tid");
}
else {
  printOut("klokken er ikke 7, jeg må ta");
}
printOut(newLine);
//part 3
wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut("klokken er 7, du kan ta bussen")
}
if (wakeUpTime == 8) {
  printOut("klokken er 8, du kan ta toget")
}
else {
  printOut("du må ta bilen")
}
printOut(newLine);
printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const value =0;
  printOut(`value = ${value}`);
  if (value > 0) {
    printOut("Positiv");
  }
  if (value < 0) {
    printOut("Negativ");
  } 
  if (value==0) {
    printOut("null");
  }
  printOut(newLine);


printOut("--- Part 6 og 7----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;
if (imageSize >= 6) {
  printOut(`bildet er ${imageSize}mb og det er for stort`);
}
else if (imageSize >= 4) {
  printOut(`Bildet er ${imageSize}mb og er stort nok`);
}
else if (imageSize < 4) {
  printOut(`bildet er ${imageSize}mb og det er for lite`);
}

printOut(newLine);

printOut("--- Part 8 og 9----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"jun", "Juli", "August", "September", "October", "November", "December"];
const dayList =["31", "28", "30", "30", "31",
"30", "31", "31", "30", "31", "30", "31"];

const noOfMonth = monthList.length;
const i = Math.floor(Math.random() * noOfMonth);

const monthName = monthList[i];
const monthDay  = dayList[i];

printOut(`måned = ${monthName}`);
printOut(`dager i måned = ${monthDay}`);

if (monthName.includes("r")) {
  printOut("ta vitamnin d");
} else {
  printOut("du trenger ikke ta vitamin d");
}
printOut(newLine);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (["Mars", "Mai"].includes(monthName)) {
  printOut("stengt")
}
  else if (monthName.includes("April")) {
    printOut("there is a temorary premise next door")
  }
  else {
    printOut("det er åpent")
  }
  printOut(newLine);
